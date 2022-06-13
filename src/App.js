import React from 'react';
import Home from './views/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles/';
import './App.css';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Quicksand',
        'sans-serif',
      ].join(','),
    },});

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
