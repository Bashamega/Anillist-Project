import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export function Pagination({page}:{page:number}){
    return(
        <footer className="bg-blue-500 text-white w-1/3 shadow-md rounded-lg absolute bottom-10 p-5 left-1/3 flex justify-evenly">
            <GrPrevious/>
            {page}
            <GrNext/>
        </footer>
    )
}