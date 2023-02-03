import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Carparks from './Components/Carparks';
import axios from 'axios';
import ProductionNotes from './Components/ProductionNotes';

// 3 components
// 4 props
// 2 state properties
// 2 setState
// 2 routes

function App() {
  let [carparksData, setCarparksData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [retrievedTime, setRetrievedTime] = useState('');

  // 'https://api.data.gov.sg/v1/transport/carpark-availability'

  useEffect(() => {
    let apiCall = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `https://api.data.gov.sg/v1/transport/carpark-availability`
        );
        setCarparksData(response.data.items[0].carpark_data);
        // setRetrievedTime(response.data.items[0].timestamp);
        console.log(response.data.items[0].timestamp);
        let time = response.data.items[0].timestamp.slice(11, 16);
        let year = response.data.items[0].timestamp.slice(2, 4);
        let month = response.data.items[0].timestamp.slice(5, 7);
        let day = response.data.items[0].timestamp.slice(8, 10);
        console.log(day, month, year);
        let formattedTimestamp = time + ' (HH:MM)';
        setRetrievedTime(formattedTimestamp);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    apiCall();
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/carpark-list'
            element={
              <Carparks
                carparksData={carparksData}
                loading={loading}
                timestamp={retrievedTime}
              />
            }
          />
          <Route path='/production-notes' element={<ProductionNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
