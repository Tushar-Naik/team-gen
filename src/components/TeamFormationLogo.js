import React from 'react';

const TeamFormationLogo = ({ width = 64, height = 64 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64">
        <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
                <feOffset dx="1" dy="1" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <g filter="url(#shadow)">
            <path d="M10 22 Q 32 6, 54 22" stroke="black" fill="none" strokeWidth="2"/>
            <path d="M10 42 Q 32 58, 54 42" stroke="black" fill="none" strokeWidth="2"/>

            <circle cx="16" cy="16" r="5" fill="white" stroke="black" strokeWidth="1.5"/>
            <circle cx="32" cy="10" r="5" fill="white" stroke="black" strokeWidth="1.5"/>
            <circle cx="48" cy="16" r="5" fill="white" stroke="black" strokeWidth="1.5"/>

            <circle cx="16" cy="48" r="5" fill="black"/>
            <circle cx="32" cy="54" r="5" fill="black"/>
            <circle cx="48" cy="48" r="5" fill="black"/>

            <path d="M20 32 L 44 32 M 32 20 L 32 44" stroke="black" strokeWidth="2"/>
            <circle cx="32" cy="32" r="10" fill="none" stroke="black" strokeWidth="1.5"/>

            <path d="M28 30 L 31 33 L 34 30 L 37 33" stroke="black" strokeWidth="1.5" fill="none"/>
            <path d="M28 34 L 31 31 L 34 34 L 37 31" stroke="black" strokeWidth="1.5" fill="none"/>
        </g>
    </svg>
);

export default TeamFormationLogo;