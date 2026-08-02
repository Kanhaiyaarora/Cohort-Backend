import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [postData, setPostData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
        );
        console.log(res.data)
        setPostData(prev => [...prev, ...res.data]);
        if (res.data.length < 10) {
          setHasMore(false);
          return;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData()
  }, [page])



  const handleScroll = () => {
    if (isLoading || !hasMore) return;
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;

    if (innerHeight + scrollTop >= scrollHeight - 1) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLoading, hasMore])

  return (

    < div >
      {
        postData.map((product) => (
          <div key={product.id}>
            <h1 style={{ marginBottom: "100px", backgroundColor: "cyan" }}>{product.title}</h1>
          </div>
        ))
      }
      {isLoading && <h1 style={{ backgroundColor: "red", font: "bold" }}>Loading...</h1>}
    </div >
  )
}

export default App
