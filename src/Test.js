import React, { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      let data = await response.json();

      data = data[0].email;
      setData(data); // Set the fetched projects data as state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={handleClick}>hi</button>
    </div>
  );
};

export default Test;
