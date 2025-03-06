
import './App.css';
import Navbar from './Navbar';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'; // Import the theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.default", // This now uses the theme's background color (black)
          minHeight: "100vh",
          color: "white", // Text color needs to be white to be visible on the black background
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar />
        <Typography variant="h4" mt={4}>
          Welcome to My App
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
