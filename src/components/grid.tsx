import { PageData } from "@/app/page";
import React from "react";
import { CardElement } from "./CardElement";
import { Pagination } from "./Pagination";
export function Grid({ data, currentPage, setCurrentPage, nextPage }: { data: PageData | undefined, currentPage:number, setCurrentPage:React.Dispatch<React.SetStateAction<number>>, nextPage:boolean}) {
    return (
        <section>
            {data && data.data.Page.media.length > 0 ? (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10 mt-32">
                        {data.data.Page.media.map((element, key) => (
                            <CardElement element={element} key={key} />
                        ))}
                    </div>
                    <Pagination page={currentPage} setPage={setCurrentPage} nextPage={nextPage} />
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