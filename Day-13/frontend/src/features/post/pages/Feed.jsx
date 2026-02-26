import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { UsePost } from '../hook/usePost'
import Nav from '../components/Nav'


const Feed = () => {

  const { feed, handleGetFeed, loading, handleLike } = UsePost()

  useEffect(() => {
    handleGetFeed()
  }, [])

  // console.log(feed) 

  if (loading || !feed) {
    return (<main><h1>Feed is loading...</h1></main>)
  }

  return (
    <main className='feed-page'>
      <Nav />
      <div className="feed">
        <div className="posts">
          {feed.map(post => {
            return <Post key={post._id} user={post.user} post={post} handleLike={handleLike} />
          })}



        </div>
      </div>
    </main>
  )
}

export default Feed
