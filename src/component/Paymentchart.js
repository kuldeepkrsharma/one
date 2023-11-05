import React from 'react'
import ReactApexChart from 'react-apexcharts';
import json from "./jsondata.json";
import Title from './Title';

let uniqueItems=[];

json.forEach((item) => {
    const itemName = item.PaymentMethod;
    let isDuplicate = false;

    for (let i = 0; i < uniqueItems.length; i++) {
      if (uniqueItems[i] === itemName) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueItems.push(itemName);
    }
  });


  const paymentMethodCounts = {};

  json.forEach((item) => {
    const itemName = item.PaymentMethod;
  
    // Initialize the count to 0 if it's not already in the object
    if (!paymentMethodCounts[itemName]) {
      paymentMethodCounts[itemName] = 0;
    }
  
    // Increment the count
    paymentMethodCounts[itemName]++;
  });

  console.log(uniqueItems);
  

const categories=uniqueItems;
const quantities=[paymentMethodCounts["Credit Card"],paymentMethodCounts["Cash"]];
function Paymentchart() {
    const options = {
        xaxis: {
          categories: categories
          
        }
      };
      
      const series = [
        {
          name: "series-1",
          data: quantities
        }
      ];

  return (
    <>
    <div className='px-4 pb-5 overview-main-card card-shadow'>
      <Title heading="Payment Methods" subheading="Payment Summary "/>
        <ReactApexChart options={options} series={series} type="bar" />
    </div>
    </>
  )
}

export default Paymentchart