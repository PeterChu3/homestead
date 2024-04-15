/**
 * XmlHttpRequest handler
 * @param {string} selectedValue current selected year
 * @param {number} inputValue bib number input value
 * @param {function} callback receives the response as a parameter and is called when response is returned
 */
export const requestData = (selectedValue, inputValue, callback) => {
  const xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://my4.raceresult.com/192607/RRPublish/data/list?key=9d484a9a9259ff0ae1a4a8570861bc3b&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2022
  // xhr.open('GET', 'https://my4.raceresult.com/204047/RRPublish/data/list?key=b02d8bcb6d81d09372a43de65f7f7d48&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2023
  // xhr.open('GET', 'https://my1.raceresult.com/259072/RRPublish/data/list?key=eca2e3d1510caee33b7710a250a6f2c1&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2024
  // xhr.open('GET', 'https://raw.githubusercontent.com/PeterChu3/jsonHosting/main/12.json'); // Dummy data

  if (selectedValue === "2024") {
    xhr.open('GET', 'https://my1.raceresult.com/259072/RRPublish/data/list?key=eca2e3d1510caee33b7710a250a6f2c1&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2024
  } else if (selectedValue === "2023") {
    xhr.open('GET', 'https://my4.raceresult.com/204047/RRPublish/data/list?key=b02d8bcb6d81d09372a43de65f7f7d48&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2023
  } else if (selectedValue === "2022") {
    xhr.open('GET', 'https://my4.raceresult.com/192607/RRPublish/data/list?key=9d484a9a9259ff0ae1a4a8570861bc3b&listname=Online%7CLap%20Details&page=live&contest=0&r=bib2&bib=' + inputValue); // 2022
  }
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
    // SUGGEST: Check for other statuses to render error for bad request?
  };
  xhr.send();
  // if (data != null) {
  //   console.log(data.data);
  // }
}