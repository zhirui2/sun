import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import NoteItem from './NoteItem';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
    setFilteredNotes(savedNotes);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = notes.filter(note => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <div>
      <h1>Notes</h1>
      <SearchBar onSearch={handleSearch} />
      <Link to="/notes/new">Create New Note</Link>
      <div>
        {filteredNotes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NoteList;