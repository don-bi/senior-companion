"use client"

import React, { useState } from "react";

export default function MediaLink({children, href, words, color, hoverColor}: 
    {children: React.ReactNode, href: string, words: string, color: string, hoverColor: string}) {
    
    const [colorClass, setColorClass] = useState(color);
    
    return (
        <a href={href}
            onMouseOver={() => {
                setColorClass(hoverColor)
            }}
            onMouseOut={() => {
                setColorClass(color)
            }}
            className="flex items-center gap-2"
            >
                {React.cloneElement(children as React.ReactElement<any>, { className: colorClass })}
                <div className={colorClass}>{words}</div>
            </a>
    )
}