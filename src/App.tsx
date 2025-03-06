

import './App.css';
import Navbar from './Navbar';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box sx={{
      bgcolor: "background.default",
      minHeight: "100vh",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
    
      <Navbar />
      <Typography variant="h4" mt={4}>
        Welcome to My App
      </Typography>
    </Box>
  );
}

export default App;
