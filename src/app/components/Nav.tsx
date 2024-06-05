export function Nav(){
    return(
        <nav className="m-10 p-5 bg-blue-500 rounded-lg relative shadow-xl">
            <h1 className=" text-2xl text-white border p-1 rounded text-center">Anilist Project | Unofficial</h1>
            <section className=" p-5 absolute w-1/2 flex  left-1/4 bg-white rounded shadow-lg">
                <input type="search" className=" border-2 rounded shadow"/>
            </section>
        </nav>
    )
}