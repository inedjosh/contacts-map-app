import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@chakra-ui/react';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <Box position={'relative'}>
      <Routes>
        <Route path="/:page" element={<Home />} />
      </Routes>
      <MobileNav />
    </Box>
  );
}

export default App;
