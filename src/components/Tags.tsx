import React from "react";
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from "./ui/tooltip";
export function Tags({ title, disc }: { title: string, disc: string }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <p>{title}</p>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{disc}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}