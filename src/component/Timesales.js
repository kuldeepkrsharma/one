import React from "react";
import ReactApexChart from "react-apexcharts";
import json from "./jsondata.json";
import Title from "./Title";

// Sort the array based on DatePurchase in ascending order
// Create an empty array to store item quantities as objects
const itemQuantitiesArray = [];

// Create an object to store item quantities
const itemQuantities = {};

// Loop through the data array
for (const entry of json) {
  const itemPurchased = entry.DatePurchase;

  // Check if the itemPurchased value is already in the itemQuantities object
  if (itemQuantities[itemPurchased]) {
    // If it exists, increment the quantity by 1
    itemQuantities[itemPurchased]++;
  } else {
    // If it doesn't exist, initialize the quantity to 1
    itemQuantities[itemPurchased] = 1;
  }
}

// Convert itemQuantities into an array of objects
for (const item in itemQuantities) {
  itemQuantitiesArray.push({
    itempurchased: item,
    quantity: itemQuantities[item],
  });
}

// console.log(itemQuantitiesArray);
// const categories = Object.keys(itemQuantities);
// const quantities = Object.values(itemQuantities);



const categories = Object.keys(itemQuantities);
const quantities = Object.values(itemQuantities);


const options = {
  xaxis: {
       categories: categories,
  },
};

const series = [
  {
    name: "series-1",
    data: quantities,
  },
];
function Timesales() {
  return (
    <div className=" px-4 overview-main-card card-shadow">
        <Title heading="Sales Overview" subheading="Time sheet"/>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={600}
      />
    </div>
  );
}

export default Timesales;
