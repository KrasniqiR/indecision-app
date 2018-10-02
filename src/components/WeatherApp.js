import React from 'react';
import LocationForm from './LocationForm';
import Header from './Header';
import TodayView from './TodayView';
import WeekView from './WeekView';


export default class WeatherApp extends React.Component {
  state = {};
  
  
  
  
  render() {
    return ( 
         <div>
        <Header />
        <LocationForm />
        <TodayView />
        <WeekView />
        </div>
      )
  } 
   
};



