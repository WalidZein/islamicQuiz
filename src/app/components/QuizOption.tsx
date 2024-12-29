'use client';

interface QuizOptionProps {
    option: string;
    index: number;
    isSelected: boolean;
    isCorrect: boolean;
    showResult: boolean;
    isMultiSelect?: boolean;
    onSelect: (index: number) => void;
}

export function QuizOption({
    option,
    index,
    isSelected,
    isCorrect,
    showResult,
    isMultiSelect = false,
    onSelect,
}: QuizOptionProps) {
    let optionClasses =
        'w-full p-4 text-left rounded-md transition-colors duration-300 whitespace-pre-line flex items-center';

    // Add checkbox/radio styling
    const selectionStyle = isMultiSelect ? 'pl-10 relative' : '';
    optionClasses += ' ' + selectionStyle;

    if (!showResult) {
        optionClasses +=
            ' cursor-pointer';
        if (isSelected) { optionClasses += ' bg-blue-500 text-white'; }
        else { optionClasses += ' bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer text-gray-800 dark:text-gray-100'; }
    } else if (isCorrect) {
        optionClasses += ' bg-green-500 text-white';
    } else if (!isCorrect && isSelected) {
        optionClasses += ' bg-red-500 text-white';
    } else {
        optionClasses += ' bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100';
    }

    return (
        <li
            className={optionClasses}
            onClick={() => !showResult && onSelect(index)}
        >
            {isMultiSelect && (
                <div className="absolute left-3">
                    <div className={`w-5 h-5 border-2 ${isSelected ? 'bg-black border-black' : 'border-black'} rounded`}>
                        {isSelected && (
                            <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                </div>
            )}
            {option}
        </li>
    );
} 