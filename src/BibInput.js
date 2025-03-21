import React, { useState, useEffect } from 'react';

const BibInput = ({ onObjectReceived }) => {

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [selectedValue, setSelectedValue] = useState("2025"); // State to keep track of selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value); // Update selected value when dropdown value changes
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const yearParam = urlParams.get('year');
    const bibParam = urlParams.get('bib');

    // Check if the year parameter exists in the URL
    if (yearParam && ['2022', '2023', '2024', '2025'].includes(yearParam)) {
      setSelectedValue(yearParam); // Assign the year parameter to loadedYear state
    }
    if (bibParam) {
      setInputValue(bibParam);
    }
  }, []); // Only run this effect once, when the component mounts

  function findKeyBySecondNumber(targetNumber, data) {
    for (const key in data) {
      const match = key.match(/#\d+_(\d+)/); // Extract second number
      if (match && match[1] === targetNumber) {
        return { key, data: data[key] }; // Return both key and data
      }
    }
    return null; // Return null if not found
  }


  const handleButtonClick = () => {
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://my4.raceresult.com/192607/RRPublish/data/list?key=9d484a9a9259ff0ae1a4a8570861bc3b&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2022
    // xhr.open('GET', 'https://my4.raceresult.com/204047/RRPublish/data/list?key=b02d8bcb6d81d09372a43de65f7f7d48&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2023
    // xhr.open('GET', 'https://my1.raceresult.com/259072/RRPublish/data/list?key=eca2e3d1510caee33b7710a250a6f2c1&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2024
    // xhr.open('GET', 'https://raw.githubusercontent.com/PeterChu3/jsonHosting/main/12.json'); // Dummy data
    //https://my4.raceresult.com/310199/RRPublish/data/list?key=8d488f25d22b08ed0dc395c939995c3d&listname=Online%7CLap%20Details&page=live&contest=0&r=pid&pid=814
    if (selectedValue === "2025") {
      xhr.open('GET', 'https://my4.raceresult.com/310199/RRPublish/data/list?key=8d488f25d22b08ed0dc395c939995c3d&listname=Online%7CLap%20Details&page=live&contest=0'); // 2025
    } else if (selectedValue === "2024") {
      xhr.open('GET', 'https://my1.raceresult.com/259072/RRPublish/data/list?key=eca2e3d1510caee33b7710a250a6f2c1&listname=Online%7CLap%20Details&page=live&contest=0'); // 2024
    } else if (selectedValue === "2023") {
      xhr.open('GET', 'https://my4.raceresult.com/204047/RRPublish/data/list?key=b02d8bcb6d81d09372a43de65f7f7d48&listname=Online%7CLap%20Details&page=live&contest=0'); // 2023
    } else if (selectedValue === "2022") {
      xhr.open('GET', 'https://my4.raceresult.com/192607/RRPublish/data/list?key=9d484a9a9259ff0ae1a4a8570861bc3b&listname=Online%7CLap%20Details&page=live&contest=0'); // 2022
    }
    xhr.onload = function () {
      if (xhr.status === 200) {
        onObjectReceived(findKeyBySecondNumber(inputValue, JSON.parse(xhr.responseText).data));

      }
    };
    xhr.send();


    // if (data != null) {
    //   console.log(data.data);
    // }
  };


  return (
    <div>
      <select id="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="2025">2025</option> {/* Default option */}
        <option value="2024">2024</option> {/* Second option */}
        <option value="2023">2023</option> {/* Third option */}
        <option value="2022">2022</option> {/* Fourth option */}
      </select>
      <input onChange={handleInputChange} value={inputValue} type="number"></input>
      <button id="myButton" onClick={handleButtonClick}>Get Data From Bib Number</button>
    </div>
  );
};

export default BibInput;