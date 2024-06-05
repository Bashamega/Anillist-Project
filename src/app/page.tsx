"use client"
import React, { useState } from "react";
import { Nav } from "./components/Nav";
export default function App(){
  const [term, setTerm] = useState<string>('');

  return(
    <main>
      <Nav setVal={setTerm}/>
    </main>
  )
}