//Snippet
const a = {
    start: { x: 5, y: 6},
    end: { x: 6, y: -9 }
  };
  const { start : { x: startX, y: startY }} = a;
  console.log(startX, startY); // 5, 6


  //main program


  const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    const {tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6