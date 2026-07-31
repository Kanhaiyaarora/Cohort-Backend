import React, { useState } from 'react'



const PaginationButton = ({ totalPost, postPerPage, setCurrentPage }) => {

  let pages = []
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i)
  }


  console.log(totalPost)
  return (
    <div>
      {
        pages.map((page) => (
          <button onClick={() => setCurrentPage(page)} key={page.id} style={{ margin: "1rem", padding: "1rem" }}>{page}</button>

        ))
      }
    </div>
  )
}

export default PaginationButton
