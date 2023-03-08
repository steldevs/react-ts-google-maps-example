import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import SamplePage from './Page';
import { Box } from '@mui/material';
import { AppStyles } from './App.styles';

function App() {
  return (
    <div className="App" style={AppStyles.background}>
      <AppHeader />
      <Box sx={AppStyles.mainContainer}>
        <SamplePage />
      </Box>
    </div>
  );
}

export default App;
