import { useEffect, useState } from 'react'
import axios from 'axios'
import PaginationButton from './components/PaginationButton'

function App() {
  const [postData, setPostData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)



  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const res = await axios.get('https://dummyjson.com/products')
    setPostData(res.data.products)
  }

  const lastPostIndex = currentPage * postPerPage //10
  const firstPostIndex = lastPostIndex - postPerPage //0

  const currentPost = postData.slice(firstPostIndex, lastPostIndex)

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        currentPost.map((item) => (
          <div style={{ margin: "1rem", padding: "1rem", width: "200px", backgroundColor: "whitesmoke" }} key={item.id}>
            <h1 style={{ fontSize: "1rem" }}>{item.title}</h1>
            <img style={{ width: "100px" }} src={item.thumbnail} alt={item.title} />
          </div>
        ))
      }
      <PaginationButton setCurrentPage={setCurrentPage} totalPost={postData.length} postPerPage={postPerPage} />
    </div>
  )
}

export default App
