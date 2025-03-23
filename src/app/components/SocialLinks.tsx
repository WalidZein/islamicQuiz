'use client';

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
    showTitle?: boolean;
    className?: string;
    iconSize?: number;
    alignment?: 'center' | 'left' | 'right';
}

export default function SocialLinks({
    showTitle = true,
    className = "",
    iconSize = 5,
    alignment = 'center'
}: SocialLinksProps) {
    const alignmentClasses = {
        center: 'justify-center',
        left: 'justify-start',
        right: 'justify-end'
    };

    return (
        <div className={`${className}`}>
            {showTitle && (
                <h3 className="font-semibold text-lg mb-3 text-center">Join Our Community</h3>
            )}
            <div className={`flex flex-wrap text-white ${alignmentClasses[alignment]} gap-3`}>
                <a
                    href="https://chat.whatsapp.com/EzuGKEk8JFYCttCttg1YtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/80 hover:bg-green-500/80 rounded-lg transition-colors"
                    aria-label="Join our WhatsApp group"
                >
                    <FaWhatsapp className={`w-${iconSize} h-${iconSize}`} />
                </a>
                <a
                    href="https://x.com/muslimofislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 hover:bg-black/60 rounded-lg transition-colors"
                    aria-label="Follow us on X (Twitter)"
                >
                    <FaXTwitter className={`w-${iconSize} h-${iconSize}`} />
                </a>
                <a
                    href="https://instagram.com/therealmuslimbox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600/80 hover:bg-pink-500/80 rounded-lg transition-colors"
                    aria-label="Follow us on Instagram"
                >
                    <FaInstagram className={`w-${iconSize} h-${iconSize}`} />
                </a>
            </div>
        </div>
    );
} 