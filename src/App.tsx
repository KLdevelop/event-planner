import React from 'react';
import 'app.module.scss';
import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import {
  PersonalPage,
  OverviewPage,
  RegBlock,
  AuthBlock,
  LoginPage,
  RatingPage,
  Description,
  MainPage,
} from './pages';
import { AddTeam, Header, MyTeams, PersonalData, MyEvents, Footer } from './components';
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
        <Route index element={<MainPage />} />
        <Route path="overview" element={<OverviewPage />} />
        <Route path="description" element={<Description />} />
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
        <Route path="team" element={<AddTeam />} />
        <Route path="sendapp" element={<div>Send app</div>} />
        <Route path="addteam" element={<MyTeams />} />
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
