import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainMetrics from './components/MainMetrics';
import TeamActivity from './components/TeamActivity';
import Revenue from './components/Revenue';
import './App.css';

const App = () => {
  return (
    <Box display="flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <header>
          <Header />
        </header>
        <div className="main-metrics">
          <MainMetrics />
        </div>
        <Box display="flex">
          <div className="team-activity">
            <TeamActivity />
          </div>
          <div className="revenue">
            <Revenue />
          </div>
        </Box>
      </div>
    </Box>
  );
}

export default App;
