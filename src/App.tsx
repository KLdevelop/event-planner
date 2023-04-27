import React from 'react';
import 'app.module.scss';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { PersonalPage, OverviewPage } from './pages';
import { Header } from './components';
import { Footer } from './components/Footer';

export const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="overview" element={<OverviewPage />} />
        <Route path="lk" element={<PersonalPage />}>
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
      </Route>
    </Routes>
  </Router>
);
