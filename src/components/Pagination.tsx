import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export function Pagination({page, setPage, nextPage}:{page:number, setPage:React.Dispatch<React.SetStateAction<number>>, nextPage:boolean}){

    return(
        <footer className="bg-blue-500 text-2xl items-center text-white w-1/3 shadow-md rounded-lg absolute bottom-10 p-5 left-1/3 flex justify-evenly">
            <GrPrevious className={page==1?"text-slate-300":""} onClick={()=>setPage(page !=1? page-1: page)}/>
            {page}
            <GrNext className={!nextPage?"text-slate-300":""} onClick={()=>setPage(nextPage? page+1: page)}/>
        </footer>
    )
}