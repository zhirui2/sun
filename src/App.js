import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import TagManager from './components/TagManager';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/notes/:id" element={<NoteEditor />} />
          <Route path="/tags" element={<TagManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;