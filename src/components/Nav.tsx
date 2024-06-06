import React, { useState } from "react";

export function Nav({setVal}:{setVal:React.Dispatch<React.SetStateAction<string>>}){
    const [localVal, setLocal] = useState<string>('');
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setVal(localVal)
    }
    return(
        <nav className="m-10 p-5 bg-blue-500 rounded-lg relative shadow-xl">
            <h1 className=" text-2xl text-white border p-1 rounded text-center">Anilist Project | Unofficial</h1>
            <section className=" p-5 absolute w-1/2 flex  left-1/4 bg-white rounded shadow-lg">
                <form className="flex w-full" onSubmit={handleSubmit}>
                <input required={true} type="search" value={localVal} onChange={(e)=>{setLocal(e.target.value)}} className=" border-2 rounded shadow w-3/4 p-2 text-lg" placeholder="Search..."/>
                <button  className="bg-blue-500 text-white font-bold py-2 px-4 w-1/4 ml-2 rounded hover:bg-blue-700">Search</button>
                </form>
            </section>
        </nav>
    )
}