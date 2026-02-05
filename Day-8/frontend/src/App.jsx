import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("https://cohort-backend-fbdj.onrender.com/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function createHandler(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    axios
      .post("https://cohort-backend-fbdj.onrender.com/api/notes", {
        title,
        description,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
    e.target.title.value = "";
    e.target.description.value = "";
  }

  function deleteNoteHandler(noteId) {
    axios.delete("https://cohort-backend-fbdj.onrender.com/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  function updateNoteHandler(noteId) {
    const newDescription = prompt("Enter New Description...")
    axios.patch("https://cohort-backend-fbdj.onrender.com/api/notes/" + noteId, { description: newDescription }).then((res) => {
      console.log(res.data);
      fetchNotes()

    })
  }



  return (
    <>
      <h1>Notes App</h1>
      <form className="note-create-form" onSubmit={createHandler}>
        <input name="title" type="text" placeholder="Enter Note Title" />
        <input
          name="description"
          type="text"
          placeholder="Enter Note Description"
        />
        <button>Create</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div key={note._id} className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  deleteNoteHandler(note._id);
                }}
                id={note._id}
              >
                Delete
              </button>
              <button onClick={() => updateNoteHandler(note._id)} >Update</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
