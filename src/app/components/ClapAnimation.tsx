'use client';

import React, { useEffect, useState } from 'react';

interface Clap {
    id: number;
    left: number;
    size: number;
}

export function ClapAnimation() {
    const [claps, setClaps] = useState<Clap[]>([]);

    useEffect(() => {
        // Create clap emojis with varying sizes
        const newClaps = Array.from({ length: 5 }, (_, i) => ({
            id: Date.now() + i,
            left: Math.random() * 60 + 20, // Random position between 20% and 80%
            size: Math.random() * 0.5 + 1.5, // Random size between 1.5 and 2
        }));

        setClaps(newClaps);

        // Remove claps after animation
        const timer = setTimeout(() => {
            setClaps([]);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {claps.map((clap) => (
                <div
                    key={clap.id}
                    className="absolute bottom-4 text-2xl md:text-4xl animate-float"
                    style={{
                        left: `${clap.left}%`,
                        transform: `scale(${clap.size})`,
                    }}
                >
                    👏
                </div>
            ))}
        </div>
    );
} 