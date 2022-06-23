import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signout from './pages/Signout';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import { getData } from './route'



function App() {
  // const defaultHeaders = () => {
  //   const cookies = document.cookie.split(";");
  //   const foundToken = cookies.filter(itm => {
  //     return itm.indexOf("XSRF-TOKEN") >= 0;
  //   });
  //   console.log("working");
  //   const xtoken = foundToken.length ? foundToken[0].split("=")[1] : "";
  //   return {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "X-XSRF-TOKEN": xtoken,
  //     "WM_CONSUMER.ID": "2d0a30c7-b4cc-45d1-b451-d93535f5a92d",
  //     "WM_CONSUMER.TENANT_ID":"0",
  //     "WM_SVC.ENV":"teflon",
  //     "WM_SVC.NAME":"order-service",
  //     "WM_SVC.VERSION":"4.0.0",
  //     "X-Request-ID":"1234_3bb32b5d-32e9-4d0a-ace6-e682edddd348",
  //     "WM_QOS.CORRELATION_ID":"1234",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS"
  //   };
  // };


  useEffect(() => {
    getData();
}, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='Signout' element={<Signout  />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
