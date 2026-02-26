import React from 'react'
import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react'


const Post = ({ user, post, handleLike }) => {

  return (
    <div className="post">
      <div className="user">
        <div className="img-wrapper">
          <img src={user.profileImage} alt="username-url" />
        </div>


        <p>{user.username}</p>
      </div>
      <img src={post.imageUrl} alt="post-url" />
      <div className="icons">
        <div className="left">
          <button onClick={() => handleLike(post._id)}  ><Heart className={post.isLiked ? "like" : ""} /> </button>
          <button><MessageCircle /> </button>
          <button><Send /> </button>
        </div>
        <div className="right">
          <button><Bookmark /> </button>
        </div>
      </div>
      <div className="bottom">
        <p className='caption'>{post.caption}</p>
      </div>
    </div>
  )
}

export default Post
