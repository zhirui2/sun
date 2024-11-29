// import React, { useEffect, useState } from 'react';

// function TagManager() {
//   const [tags, setTags] = useState([]);
//   const [newTag, setNewTag] = useState('');

//   useEffect(() => {
//     const savedTags = JSON.parse(localStorage.getItem('tags')) || [];
//     setTags(savedTags);
//   }, []);

//   const addTag = () => {
//     if (newTag.trim() === '') return;
//     const updatedTags = [...tags, newTag];
//     setTags(updatedTags);
//     localStorage.setItem('tags', JSON.stringify(updatedTags));
//     setNewTag('');
//   };

//   const deleteTag = (tag) => {
//     const updatedTags = tags.filter(t => t !== tag);
//     setTags(updatedTags);
//     localStorage.setItem('tags', JSON.stringify(updatedTags));
//   };

//   return (
//     <div>
//       <h1>Tag Manager</h1>
//       <input 
//         type="text" 
//         value={newTag} 
//         onChange={(e) => setNewTag(e.target.value)} 
//         placeholder="New Tag" 
//       />
//       <button onClick={addTag}>Add Tag</button>
//       <ul>
//         {tags.map((tag, index) => (
//           <li key={index}>
//             {tag} <button onClick={() => deleteTag(tag)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TagManager;