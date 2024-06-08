import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './BookSearch';
import PersonalBookshelf from './PersonalBookshelf';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BookSearch/>} />
        <Route exact path="/bookshelf" element={<PersonalBookshelf/>} />
      </Routes>
    </Router>
  );
}

export default App;
