'use client';

interface QuizOptionProps {
    option: string;
    index: number;
    isSelected: boolean;
    isCorrect: boolean;
    showResult: boolean;
    onSelect: (index: number) => void;
}

export function QuizOption({
    option,
    index,
    isSelected,
    isCorrect,
    showResult,
    onSelect,
}: QuizOptionProps) {
    let optionClasses =
        'w-full p-4 text-left rounded-md transition-colors duration-300';

    if (!showResult) {
        optionClasses +=
            ' bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer text-gray-800 dark:text-gray-100';
    } else if (isCorrect) {
        optionClasses += ' bg-green-500 text-white';
    } else if (isSelected) {
        optionClasses += ' bg-red-500 text-white';
    } else {
        optionClasses += ' bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100';
    }

    return (
        <li
            className={optionClasses}
            onClick={() => !showResult && onSelect(index)}
        >
            {option}
        </li>
    );
} 