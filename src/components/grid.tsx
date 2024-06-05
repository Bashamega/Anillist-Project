import { PageData } from "@/app/page";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
export function Grid({data}:{data:PageData |undefined}){
    return(
        <div className="grid grid-cols-3 gap-4 m-10 mt-32">
            {data && data.data.Page.media.map(element => (
                <Card key={element.id}>
                    <CardHeader>
                        <CardTitle>{element.title.romaji}</CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}