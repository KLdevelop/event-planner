import React from 'react';
import 'app.module.scss';
import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Header } from './components';
import { PersonalPage, OverviewPage, RegBlock, AuthBlock, LoginPage, RatingPage } from './pages';
import { AddTeam, Header, MyTeams, PersonalData, MyEvents } from './components';
import { Footer } from './components/Footer';
import { TeamBlock } from './pages/RatingPage';

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
      </Route>
      <Route
        path="/lk"
        element={
          <>
            <Header />
            <PersonalPage />
          </>
        }
      >
        <Route path="info" element={<PersonalData />} />
        <Route path="events" element={<MyEvents />} />
        <Route path="team" element={<MyTeams />} />
        <Route path="rating" element={<div>Rating</div>} />

        <Route path="sendapp" element={<div>Send app</div>} />

        <Route path="addteam" element={<AddTeam />} />
        <Route path="registr" element={<div>Registr</div>} />
        <Route path="delete" element={<div>Delete</div>} />
        <Route path="analysis" element={<div>Analysis</div>} />
        <Route path="sendapp" element={<div>Send app</div>} />
        <Route path="rating" element={<RatingPage />}>
          <Route index element={<TeamBlock />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />}>
        <Route index element={<AuthBlock />} />
        <Route path="authorization" element={<Navigate replace to="/login" />} />
        <Route path="registration" element={<RegBlock />} />
      </Route>
    </Routes>
  </Router>
);
