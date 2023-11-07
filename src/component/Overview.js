import React from "react";
import json from "./jsondata.json";
import img1 from "../assets/graph.png";
import img2 from "../assets/sale.png";
import img3 from "../assets/tag.png";
import img4 from "../assets/user.png";
import ReactApexChart from "react-apexcharts";
import Title from "./Title";
let totalorder = 0;
let totalsales = 0;
let productsold = 0;
console.log(totalsales);
let customer = [];

//Find sales overview
json.map((item, index) => {
  totalorder = totalorder + 1;
  if (typeof item.PurchaseAmount == "number") {
    totalsales = totalsales + item.PurchaseAmount;
    productsold = productsold + 1;
  }
});
console.log("customer", customer);

//Find the customer who has the highest payent

//
let handbagq = 0;
let sweaterq = 0;
let i = 0;

// Create an empty array to store item quantities as objects
const itemQuantitiesArray = [];

// Create an object to store item quantities
const itemQuantities = {};

// Loop through the data array
for (const entry of json) {
  const itemPurchased = entry.ItemPurchased;

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
function Overview() {
  return (
    <div className="d-lg-flex justify-content-between">
      <div className=" px-4 pb-5 overview-main-card card-shadow">
        <Title heading="Today's sales" subheading="Sales Summary" />
        <div className="mt-lg-5 pt-4 overviewcard">
        <div className="row">
          <div className="col-lg-3 col-6">
          <div className="bg-pink overview-subcard">
            <img src={img1}></img>
            <h3 className="">{totalsales}</h3>
            <div className="title">Total sales</div>
          </div>

          </div>
          <div className="col-lg-3 col-6">
          <div className="bg-orange overview-subcard">
            <img src={img2}></img>
            <h3 className="">{totalorder}</h3>
            <div className="title">Total order</div>
          </div>

          </div>
          <div className="col-lg-3 col-6">
          <div className="bg-green overview-subcard">
            <img src={img3}></img>
            <h3 className="">{productsold}</h3>
            <div className="title">Product sold</div>
          </div>

          </div>
          <div className="col-lg-3 col-6">
          <div className="bg-purple overview-subcard">
            <img src={img4}></img>
            <h3 className="">{productsold}</h3>
            <div className="title">Highest price</div>
          </div>

          </div>
        </div>

        </div>
      </div>

      <div className="">
        <div className="  px-4 pb-5 overview-main-card card-shadow product-overview">
          <Title heading="Product Overview" subheading="Sales Summary" />
          <div className="areachart">
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
