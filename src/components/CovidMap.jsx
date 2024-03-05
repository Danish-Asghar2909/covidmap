import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent';
import { useDispatch } from 'react-redux'
import { setAllRegion , setCountriesDetails} from './redux/filterSlice'

const CovidMap = () => {
  const [covidData, setCovidData] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true');
       
        setCovidData(response.data);
        const countries = response.data.map((item)=>{
          return item.country
        })
       
        dispatch(setAllRegion(countries))
        dispatch(setCountriesDetails(response.data))
      } catch (error) {
        console.error('Error fetching COVID data:', error);
      }
    };

    fetchData();
  }, [covidData]);

  return (
    <div style={{ height: '100vh' }}>
     {covidData ? <MapComponent data={covidData}/> : <></>}
    </div>
  );
};

export default CovidMap;
