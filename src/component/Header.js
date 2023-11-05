import React, { useEffect } from 'react'
import Chart from 'react-apexcharts';
import json from "./jsondata.json";
import Ratingreview from './Ratingreview';
import Paymentchart from './Paymentchart';
import Timesales from './Timesales';



function Header() {
  
  
  return (
    <div className="app ">
    <div className="row">
      <div className='col-lg-5'>
        <Ratingreview />
      </div>
      <div className='col-lg-5'>
        <Paymentchart />
      </div>
      <div className='col-lg-5'>
        
      </div>
    </div>
  </div>
  )
}

export default Header