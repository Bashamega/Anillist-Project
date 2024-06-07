import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import Image from "next/image";
import { Tags } from "./Tags";

interface Data {
    isAdult: boolean
    coverImage: {
        large: string
    }
    id: number
    genres:string[]
    tags:{
        name:string
        description:string
      }[]
    title: {
        romaji: string
    }
}
export function CardElement({ element, key }: { element: Data, key:Number }) {
    return (
        <Dialog>
            <DialogTrigger>
                <Card key={element.id} className="hover:scale-110 cursor-pointer">
                    <CardHeader>
                        <CardTitle>{element.title.romaji}</CardTitle>
                        <Image src={element.coverImage.large} alt={element.title.romaji} width={400} height={0} />
                    </CardHeader>
                </Card>
            </DialogTrigger>
            <DialogContent className=" max-w-[90%] max-h-[90%]">
                <DialogTitle>
                    <div className="flex justify-evenly">
                        {element.title.romaji}
                        <div className="mt-[-150px] mr-5 bg-white p-2 rounded-lg">
                            <Image src={element.coverImage.large} width={200} height={0} alt={element.title.romaji} />
                        </div>
                    </div>
                </DialogTitle>
                <DialogDescription>
                    <div className="shadow-lg  p-2 border-2 mt-2 rounded">
                        <h2 className="text-2xl text-center">FAQ</h2>
                        <details>
                            <summary>Is this an adult movie?</summary>
                            <p>{element.isAdult ? "Yes, this is an 18+ movie" : "No, it is not an adult movie"}</p>
                        </details>
                        <details>
                            <summary>What are the genres?</summary>
                            <p>The genres are: {element.genres.join(", ")}</p>
                        </details>
                        <details>
                            <summary>What are the tags?</summary>
                            <p>The tags are:</p>
                            <div className="flex flex-wrap">
                            {element.tags.map((tag, key)=>(<div key={key} className="m-2 bg-green-500 text-black rounded cursor-pointer  p-2"><Tags disc={tag.description} title={tag.name} /></div>))}
                            </div>
                        </details>
                        
                    </div>
                </DialogDescription>
            </DialogContent>

        </Dialog >
    )
}