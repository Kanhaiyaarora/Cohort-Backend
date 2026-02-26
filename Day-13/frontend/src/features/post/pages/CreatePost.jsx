import React, { useRef, useState } from 'react'
import { UsePost } from '../hook/usePost'
import { useNavigate } from 'react-router'

const CreatePost = () => {

  const navigate = useNavigate()
  const [caption, setCaption] = useState("")
  const postImageInputFieldRef = useRef()

  const { loading, handleCreatePost } = UsePost()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const file = postImageInputFieldRef.current.files[0]
    await handleCreatePost(file, caption)
    navigate('/')
  }

  if (loading) {
    return <main><h1>Wait while we creating new post</h1></main>
  }

  return (
    <main className='create-post'>
      <div className="form-container">
        <h1>Create new post</h1>
        <form onSubmit={handleSubmit} >
          <input ref={postImageInputFieldRef} type="file" name="postImage" id="postImage" required />
          <input onInput={(e) => { setCaption(e.target.value) }} value={caption} type="text" name='caption' id='caption' placeholder='Enter caption' required />
          <button>Create Post</button>
        </form>
      </div>
    </main >
  )
}

export default CreatePost
