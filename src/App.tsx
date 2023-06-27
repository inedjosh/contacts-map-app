import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@chakra-ui/react';
import MobileNav from './components/MobileNav';
import { useContext, useEffect } from 'react';

function App() {

  return (
    <Box position={'relative'}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/:page" element={<Home />} />
      </Routes>

    </Box>
  );
}

export default App;
