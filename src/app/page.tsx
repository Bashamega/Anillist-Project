"use client"
import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Grid } from "../components/grid";
import { ErrorComponent } from "@/components/error";
import { Loader } from "@/components/Loader";
export interface PageData {
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
        coverImage: {
          large: string
        }
        isAdult:boolean,
        genres: string[],
        tags:{
          name:string,
          description:string
        }[]
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
  const [data, setData] = useState<PageData | undefined>(undefined);
  const [loader, setLoader] = useState<boolean>(true)
  const handleError = (e: any) => {
    console.log(e);
    setError(true)
  }
  const handleData = (data: PageData) => {
    console.log(data)
    setNextPage(data.data.Page.pageInfo.hasNextPage)
    setData(data)
  }
  useEffect(() => {
    setLoader(true)
    var query = '';
    var variables = {
      page: currentPage,
      perPage: 30,
      search: term
    };
    query = `
      query ($id: Int, $page: Int, $perPage: Int, ${term ? "$search: String" : ""}) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id ${term ? ", search: $search" : ""}) {
            id
            isAdult
            genres
            tags{
              name
              description
            }
            coverImage{
              large,
              
            }
            title {
              romaji
            }
          }
        }
      }
      `




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

    fetch(url, options).then(res => res.json())
      .then(handleData)
      .catch(handleError);
    setLoader(false)
  }, [currentPage, term])
  return (
    <main>
      <Nav setVal={setTerm} />
      {loader && <Loader />}
      {error ? <ErrorComponent /> : <Grid data={data} currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} />}
    </main>
  )
}