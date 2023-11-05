import React, { useEffect, useState } from "react";
import json from "./jsondata.json";
import ReactApexChart from "react-apexcharts";
import Title from "./Title";

function Ratingreview() {
  const [itemname, setitemname] = useState("Boots");
  const [SelectedValue, setSelectedValue] = useState("");
  const [rating1, setrating1] = useState(0);
  const [rating2, setrating2] = useState(0);
  const [rating3, setrating3] = useState(0);
  const [rating4, setrating4] = useState(0);
  const [rating5, setrating5] = useState(0);
  useEffect(() => {
    // Call your handleSelectChange function on the first load
    handleSelectChange({ target: { value: "Handbag" } });
  }, []); // The empty dependency array ensures that this effect runs only on the first load

  const uniqueItems = [];

  json.forEach((item) => {
    const itemName = item.ItemPurchased;
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

  console.log(
    "rating before changing",
    rating1,
    rating2,
    rating3,
    rating4,
    rating5
  );
  const series = [rating1, rating2, rating3, rating4, rating5];
  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Rating 1", "Rating 2", "Rating 3", "Rating 4", "Rating 5"],
  };

  
  function handleSelectChange(event){
    const selectedValue = event.target.value; // Get the selected value
    setSelectedValue(selectedValue); // Update the selected value in state

    // Initialize an array to store the counts for different rating bins
    const ratingBins = [0, 0, 0, 0, 0]; // 0-1, 1-2, 2-3, 3-4, 4-5

    for (let i = 0; i < json.length; i++) {
      const item = json[i];

      if (item.ItemPurchased === selectedValue) {
        const reviewRating = item.ReviewRating;

        // Categorize the rating into a bin based on its value
        if (reviewRating >= 0 && reviewRating < 1) {
          ratingBins[0]++;
        } else if (reviewRating >= 1 && reviewRating < 2) {
          ratingBins[1]++;
        } else if (reviewRating >= 2 && reviewRating < 3) {
          ratingBins[2]++;
        } else if (reviewRating >= 3 && reviewRating < 4) {
          ratingBins[3]++;
        } else if (reviewRating >= 4 && reviewRating <= 5) {
          ratingBins[4]++;
        }
      }
    }

    // Update the state with the new rating counts
    setrating1(ratingBins[0]);
    setrating2(ratingBins[1]);
    setrating3(ratingBins[2]);
    setrating4(ratingBins[3]);
    setrating5(ratingBins[4]);
  };

  
  return (

    <div className="px-4  overview-main-card card-shadow ">
        <Title heading="Our products Review" subheading="Review section "/>
            <span >Select product name</span><select onChange={handleSelectChange}  className="mx-3">
        {uniqueItems.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      {/* <div>{itemname}</div> */}
      <ReactApexChart options={options} series={series} type="pie" />
      </div>

  );
}

export default Ratingreview;
