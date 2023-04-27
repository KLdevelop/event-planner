import React from 'react';
import styles from 'app.module.scss';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersonalPage } from './pages';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<div className={styles.app}>App</div>} />
      <Route path="/lk" element={<PersonalPage />}>
        <Route path="info" element={<div>Info</div>} />
        <Route path="events" element={<div>Events</div>} />
        <Route path="team" element={<div>Team</div>} />
        <Route path="rating" element={<div>Rating</div>} />
        <Route path="registr" element={<div>Registr</div>} />
        <Route path="delete" element={<div>Delete</div>} />
        <Route path="analysis" element={<div>Analysis</div>} />
        <Route path="sendapp" element={<div>Send app</div>} />
        <Route path="rating" element={<div>Rating</div>} />
      </Route>
    </Routes>
  </Router>
);
