import { useState, useEffect } from "react";
import {
  ConnectionsGameConfig,
  ConnectionsGameState,
  ConnectionsGameSubmissionData,
  ConnectionsGroupData,
} from "@/types/connections";
import { saveUserSelections } from "@/utils/userManager";

const MAX_STRIKES = 4;

function reconstructGameState(
  attempts: string[][],
  groups: ConnectionsGroupData[]
): {
  solvedGroups: ConnectionsGroupData[];
  strikes: number;
} {
  const solvedGroups: ConnectionsGroupData[] = [];
  let strikes = 0;

  attempts.forEach((attempt) => {
    // Check if this attempt matches any unsolved group
    const matchedGroup = groups.find(
      (group) =>
        !solvedGroups.includes(group) &&
        attempt.length === group.words.length &&
        attempt.every((word) => group.words.includes(word))
    );

    if (matchedGroup) {
      solvedGroups.push(matchedGroup);
    } else {
      strikes++;
    }
  });

  return {
    solvedGroups,
    strikes,
  };
}

export function useConnectionsGame(game: ConnectionsGameConfig | null) {
  const [gameState, setGameState] = useState<ConnectionsGameState>({
    selectedWords: [],
    solvedGroups: [],
    remainingWords: [],
    strikes: MAX_STRIKES,
    gameCompleted: false,
    isWon: false,
    attempts: [],
  });

  const updateGameStateFromAttempts = (attempts: string[][]) => {
    if (!game) return;

    const { solvedGroups, strikes } = reconstructGameState(
      attempts,
      game.groups
    );
    const remainingWords = game.groups
      .flatMap((group) => group.words)
      .filter(
        (word) => !solvedGroups.some((group) => group.words.includes(word))
      );

    const isGameComplete =
      solvedGroups.length === game.groups.length || strikes === MAX_STRIKES;

    setGameState({
      selectedWords: [],
      solvedGroups,
      remainingWords: shuffleArray(remainingWords),
      strikes: MAX_STRIKES - strikes,
      gameCompleted: isGameComplete,
      isWon: solvedGroups.length === game.groups.length,
      attempts,
    });
  };

  // Initialize game state
  useEffect(() => {
    if (!game) return;

    // Initialize new game
    const allWords = game.groups.flatMap((group) => group.words);
    setGameState((prev) => ({
      ...prev,
      remainingWords: shuffleArray(allWords),
      attempts: [],
    }));
  }, [game]);

  const selectWord = (word: string) => {
    if (gameState.gameCompleted) return;

    setGameState((prev) => {
      const newState = prev.selectedWords.includes(word)
        ? {
            ...prev,
            selectedWords: prev.selectedWords.filter((w) => w !== word),
          }
        : prev.selectedWords.length < 4
        ? {
            ...prev,
            selectedWords: [...prev.selectedWords, word],
          }
        : prev;

      return newState;
    });
  };

  const unselectAllWords = () => {
    setGameState((prev) => {
      return {
        ...prev,
        selectedWords: [],
      };
    });
  };

  const isDuplicateAttempt = (
    selectedWords: string[],
    attempts: string[][]
  ): boolean => {
    return attempts.some(
      (attempt) =>
        attempt.length === selectedWords.length &&
        attempt.every((word) => selectedWords.includes(word)) &&
        selectedWords.every((word) => attempt.includes(word))
    );
  };

  const isOneAway = (selectedWords: string[], groups: string[][]): boolean => {
    return groups.some((group) => {
      const matchingWords = selectedWords.filter((word) =>
        group.includes(word)
      );
      return (
        matchingWords.length === 3 &&
        selectedWords.length === 4 &&
        group.length === 4
      );
    });
  };

  const submitGuess = () => {
    if (!game || gameState.selectedWords.length !== 4) return null;

    const returnValue = {
      success: false,
      isDuplicate: false,
      isOneAway: false,
      isGameWon: false,
      isGameLost: false,
    };

    if (isDuplicateAttempt(gameState.selectedWords, gameState.attempts)) {
      returnValue.isDuplicate = true;
      return returnValue;
    }

    if (
      isOneAway(
        gameState.selectedWords,
        game.groups.map((group) => group.words)
      )
    ) {
      returnValue.isOneAway = true;
    }

    const newAttempts = [...gameState.attempts, [...gameState.selectedWords]];
    saveUserSelections(game.id, newAttempts);

    // Check if selected words form a valid category
    const foundGroup = game.groups.find(
      (group) =>
        !gameState.solvedGroups.includes(group) &&
        group.words.every((word) => gameState.selectedWords.includes(word))
    );

    setGameState((prev) => {
      if (foundGroup) {
        const newSolvedGroups = [...prev.solvedGroups, foundGroup];
        const newRemainingWords = prev.remainingWords.filter(
          (word) => !prev.selectedWords.includes(word)
        );
        const isGameWon = newSolvedGroups.length === game.groups.length;

        return {
          ...prev,
          solvedGroups: newSolvedGroups,
          remainingWords: newRemainingWords,
          selectedWords: [],
          gameCompleted: isGameWon,
          isWon: isGameWon,
          attempts: newAttempts,
        };
      } else {
        const newStrikes = prev.strikes - 1;
        const isGameLost = newStrikes === 0;

        return {
          ...prev,
          strikes: newStrikes,
          gameCompleted: isGameLost,
          isWon: false,
          attempts: newAttempts,
        };
      }
    });

    if (foundGroup) {
      const isGameWon =
        gameState.solvedGroups.length + 1 === game.groups.length;
      returnValue.success = true;
      returnValue.isGameWon = isGameWon;
    } else {
      const isGameLost = gameState.strikes - 1 === 0;
      returnValue.success = false;
      returnValue.isGameLost = isGameLost;
    }

    return returnValue;
  };

  const shuffleWords = () => {
    if (gameState.gameCompleted) return;

    setGameState((prev) => ({
      ...prev,
      remainingWords: shuffleArray([...prev.remainingWords]),
    }));
  };

  return {
    gameState,
    selectWord,
    submitGuess,
    shuffleWords,
    unselectAllWords,
    updateGameStateFromAttempts,
  };
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
