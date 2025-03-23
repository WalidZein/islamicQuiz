import Popup from './ui/Popup';

interface CategoryExplanationModalProps {
    isOpen: boolean;
    onClose: () => void;
    category: string;
    explanation: string;
}

export default function CategoryExplanationModal({
    isOpen,
    onClose,
    category,
    explanation
}: CategoryExplanationModalProps) {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            title={category}
            maxWidth="max-w-md"
            animationProps={{
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 }
            }}
        >
            <p className="text-gray-700 dark:text-gray-300 text-left whitespace-pre-line">
                {explanation}
            </p>
        </Popup>
    );
} 