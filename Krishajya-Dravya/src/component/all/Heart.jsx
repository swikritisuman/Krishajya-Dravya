import React from "react";

export default function Heart({
    size = 24,
    filled = true,
    color = "text-rose-600",
    animate = false,
    className = "",
    onClick,
}) {
    const classes = `${color} ${animate ? "animate-pulse" : ""} ${className}`;

    return filled ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: size, height: size }}
            className={classes}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="heart"
            onClick={onClick}
        >
            <path d="M12 21s-6.7-4.2-9.3-7C.9 10.9 2.1 7.7 5 7c1.8-.4 3.3.4 4 1.7.7-1.3 2.2-2.1 4-1.7 2.9.7 4.1 3.9 2.3 7-2.6 2.8-9.3 7-9.3 7z" />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: size, height: size }}
            className={classes}
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label="heart"
            onClick={onClick}
        >
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
       2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
       C13.09 3.81 14.76 3 16.5 3
       19.58 3 22 5.42 22 8.5
       c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
        </svg>

    );
}
