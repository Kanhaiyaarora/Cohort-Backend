import { useEffect, useState } from 'react'
import axios from 'axios'
import PaginationButton from './components/PaginationButton'
import Search from './components/Search'

function App() {
  const [postData, setPostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const res = await axios.get('https://dummyjson.com/products')
    setPostData(res.data.products)
  }

  const lastPostIndex = currentPage * postPerPage //10
  const firstPostIndex = lastPostIndex - postPerPage //0

  const filteredPosts = postData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const currentPost = filteredPosts.slice(firstPostIndex, lastPostIndex)
  return (

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Search search={search} setSearch={setSearch} />
      {
        currentPost.length === 0 ? <h1 style={{ width: "100%", textAlign: "center" }}>No Data Found </h1> : currentPost.map((item) => (
          <div style={{ margin: "1rem", padding: "1rem", width: "200px", backgroundColor: "whitesmoke" }} key={item.id}>
            <h1 style={{ fontSize: "1rem" }}>{item.title}</h1>
            <img style={{ width: "100px" }} src={item.thumbnail} alt={item.title} />
          </div>
        ))
      }
      <PaginationButton setCurrentPage={setCurrentPage} totalPost={filteredPosts.length} postPerPage={postPerPage} />
    </div>
  )
}

export default App
