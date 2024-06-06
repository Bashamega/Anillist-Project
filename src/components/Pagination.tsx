import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
export function Pagination({page, setPage, nextPage}:{page:number, setPage:React.Dispatch<React.SetStateAction<number>>, nextPage:boolean}){

    return(
        <footer className="m-10 p-5 bg-blue-500 rounded-lg relative shadow-xl flex justify-evenly text-white text-2xl items-center">
            <GrPrevious className={page==1?"text-slate-300":""} onClick={()=>setPage(page !=1? page-1: page)}/>
            {page}
            <GrNext className={!nextPage?"text-slate-300":""} onClick={()=>setPage(nextPage? page+1: page)}/>
        </footer>
    )
}