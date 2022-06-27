import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { getData } from './route'


function App() {
  useEffect(() => {
    getData();
}, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
