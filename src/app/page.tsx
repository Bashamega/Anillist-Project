"use client"
import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Grid } from "../components/grid";
import { Pagination } from "../components/Pagination";
interface PageData {
  data: {
    Page: {
      pageInfo: {
        total: number,
        currentPage: number,
        lastPage: number,
        hasNextPage: boolean,
        perPage: number
      },
      media: {
        id: number,
        title: {
          romaji: string
        }
      }[]
    }
  }
}
export default function App() {
  const [term, setTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<boolean>(true);
  const handleError = (e:any)=>{
    console.log(e);
    setError(true)
  }
  const handleData = (data:PageData)=>{
    console.log(data);
    setNextPage(data.data.Page.pageInfo.hasNextPage)
  }
  useEffect(() => {
    var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
      }
    }
  }
}
`;

    var variables = {
      search: term || "",
      page: currentPage,
      perPage: 30
    };

    var url = 'https://graphql.anilist.co',
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      };

    fetch(url, options).then(res=>res.json())
      .then(handleData)
      .catch(handleError);
  }, [currentPage, term])
  return (
    <main>
      <Nav setVal={setTerm} />
      <Grid />
      <Pagination page={currentPage} setPage={setCurrentPage} nextPage={nextPage} />
    </main>
  )
}