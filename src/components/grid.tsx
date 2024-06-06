import { PageData } from "@/app/page";
import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
export function Grid({ data }: { data: PageData | undefined }) {
    return (
        <section>
            {data && data.data.Page.media.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10 mt-32">
                    {data.data.Page.media.map(element => (
                        <Card key={element.id}>
                            <CardHeader>
                                <CardTitle>{element.title.romaji}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-screen">
                    <div className="bg-blue-200 border text-center w-1/2 flex justify-center items-center flex-col h-[200px] border-blue-400 text-black px-4 py-3 rounded relative max-w-md mx-auto">
                        <strong className="font-bold">No search results</strong>
                        <br></br>

                        

                    </div>
                </div>
            )}
        </section >
    )
}