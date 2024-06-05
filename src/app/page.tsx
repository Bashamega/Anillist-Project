"use client"
import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { Grid } from "../components/grid";
import { Pagination } from "../components/Pagination";
export default function App(){
  const [term, setTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1)
  return(
    <main>
      <Nav setVal={setTerm}/>
      <Grid/>
      <Pagination page={currentPage} setPage={setCurrentPage}/>
    </main>
  )
}