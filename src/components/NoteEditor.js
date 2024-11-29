import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NoteEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (id !== 'new') {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      const note = notes.find(n => n.id === id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
        setTags(note.tags.join(', '));
      }
    }
  }, [id]);
  const deleteNote = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/');
  };

  const saveNote = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = {
      id: id === 'new' ? Date.now().toString() : id,
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim())
    };

    const updatedNotes = id === 'new' 
      ? [...notes, newNote] 
      : notes.map(note => note.id === id ? newNote : note);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/');
  };

  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Content" 
      />
      <input 
        type="text" 
        value={tags} 
        onChange={(e) => setTags(e.target.value)} 
        placeholder="Tags (comma separated)" 
      />
      <button onClick={saveNote}>Save</button>
      <button onClick={deleteNote}>Delete</button> {/* 添加删除按钮 */}
    </div>
  );
}

export default NoteEditor;