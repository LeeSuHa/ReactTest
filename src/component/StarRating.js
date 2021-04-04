import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star2 = ({ selected = false, onSelect = f=>f }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
);

const createArry = (length) => [...Array(length)];

export default function StarRating( { style = {}, totalStars = 10, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{padding:'5px', ...style}} {...props}>
    {createArry(totalStars).map((n, i) => (
      <Star2 key={i} 
            selected={selectedStars>i}
            onSelect={ () => setSelectedStars(i+1)}
      />
      )) }
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}
