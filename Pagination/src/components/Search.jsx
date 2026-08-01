import React, { useState } from 'react'
import { useEffect } from 'react'


const Search = ({ search, setSearch }) => {

  useEffect(() => {
    // debouncing
    const timer = setTimeout(() => {
      console.log(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [search])

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", }}>
      <input style={{ backgroundColor: "whitesmoke", padding: "1rem", borderRadius: "0.5rem", margin: "1rem" }} onChange={(e) => {
        setSearch(e.target.value)
      }} type="text" placeholder="Search..." />
    </div>
  )
}

export default Search
