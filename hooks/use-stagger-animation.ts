"use client";

import { useEffect, useState } from "react";

interface UseStaggerAnimationOptions {
    totalItems: number;
    delayPerItem?: number;
    initialDelay?: number;
}

export function useStaggerAnimation({
    totalItems,
    delayPerItem = 50,
    initialDelay = 300,
}: UseStaggerAnimationOptions) {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(
        new Array(totalItems).fill(false)
    );

    useEffect(() => {
        // Reset all items to invisible
        setVisibleItems(new Array(totalItems).fill(false));

        // Progressively show items
        const timeouts: NodeJS.Timeout[] = [];

        for (let i = 0; i < totalItems; i++) {
            const timeout = setTimeout(() => {
                setVisibleItems((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                });
            }, initialDelay + i * delayPerItem);

            timeouts.push(timeout);
        }

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [totalItems, delayPerItem, initialDelay]);

    return visibleItems;
}
