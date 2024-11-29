import React from 'react';
import { Link } from 'react-router-dom';

function NoteItem({ note }) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>Tags: {note.tags.join(', ')}</p>
      <Link to={`/notes/${note.id}`}>Edit</Link> <br></br>
      <Link to={`/notes/${note.id}`}>Delete</Link>
    </div>
  );
}

export default NoteItem;