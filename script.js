console.log('So then time has two aspects. There is the arrow, the running river, without which there is no change, no progress, or direction, or creation. And there is the circle or the cycle, without which there is chaos, meaningless succession of instants, a world without clocks or seasons or promises.');

// elements

let noiseLines1 = document.getElementById("noiseLines1");
let noiseLines2 = document.getElementById("noiseLines2");
let noiseLines3 = document.getElementById("noiseLines3");

let displacementLine1 = document.getElementById("displacement1");
let displacementLine2 = document.getElementById("displacement2");
let displacementLine3 = document.getElementById("displacement3");

let zoom = document.getElementsByClassName("DisplacementWrapper");

let marquee = document.getElementsByClassName("marquee1");

let textTurbulence = document.getElementById("turbulence");

let gradient1 = document.getElementById("gradient1");
let gradient2 = document.getElementById("gradient2");
let gradientColor1 = document.getElementById("gradientColor1");
let gradientColor2 = document.getElementById("gradientColor2");

let box1 = document.getElementById("risoBox1");
let box2 = document.getElementById("risoBox2");

let box1copy = box1.cloneNode(true);
let box2copy = box2.cloneNode(true);

box1.after(box1copy);
box2.after(box2copy);

let sunrisePosition= {
  marginTop: "-2cm",
  marginBottom: "-2cm",
  marginLeft: "-1cm",
  marginRight: "-1cm",
	paddingLeft: "0cm",
	paddingTop: "2cm",
  paddingRight: "2cm",
 	gridColumn:"1/5",
  gridRow: "2/6",
  rotate: "-3deg",
}

let dayPosition= {
  marginTop: "-3cm",
  marginBottom: "-2cm",
  marginLeft: "-2cm",
  marginRight: "-1cm",
	paddingLeft: "0.5cm",
  paddingRight: "1.5cm",
	paddingTop: "1cm",
 	gridColumn:"1/5",
  gridRow: "1/4",
  rotate: "2deg",
}


let dayPosition2= {
  marginTop: "18cm",
  marginBottom: "-2cm",
  marginLeft: "-2cm",
  marginRight: "-1cm",
	paddingLeft: "0.5cm",
  paddingRight: "1.5cm",
	paddingTop: "1cm",
 	gridColumn:"1/5",
  gridRow: "1/4",
  rotate: "2deg",
}


let sunsetPosition= {
  marginTop: "-1cm",
  marginBottom: "-2cm",
  marginLeft: "-2cm",
  marginRight: "-4cm",
	paddingLeft: "2cm",
	paddingTop: "1cm",
 	gridColumn:"1/5",
  gridRow: "3/7",
  rotate: "0.5deg",
}

let nightPosition= {
  marginTop: "-3cm",
  marginBottom: "-2cm",
  marginLeft: "-2cm",
  marginRight: "-1cm",
	paddingLeft: "1cm",
  paddingRight: "1cm",
	paddingBottom: "1cm",
 	gridColumn:"1/5",
  gridRow: "5/7",
  rotate: "-1deg",
}

let nightPosition2= {
  marginTop: "-6cm",
  marginBottom: "-2cm",
  marginLeft: "-3cm",
  marginRight: "0cm",
	paddingLeft: "1cm",
  paddingRight: "1cm",
	paddingBottom: "1cm",
 	gridColumn:"1/5",
  gridRow: "1/7",
  rotate: "-1deg",
}

//play/pause button

const button = document.getElementById("animationToggle");
const root = document.documentElement;

button.addEventListener('click', () => {
  const currentPlayState = getComputedStyle(root).getPropertyValue('--play-state').trim();

  if (currentPlayState === 'running') {
    root.style.setProperty('--play-state', 'paused');
    button.textContent = 'Play';
  } else {
    root.style.setProperty('--play-state', 'running');
    button.textContent = 'Pause';
  }
});

/*
//function refresh (){

let day = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Zurich"}));


// display the current day of the month in two digits
let datetimeDisplayElement = document.getElementById("today");
datetimeDisplayElement.textContent = day.getDate().toString().padStart(2, '0');

let digits = date.getDate().toString().padStart(2, '0');
//console.log(digits);

// get time of sunrise & -set
let times = SunCalc.getTimes(new Date(), 47.5462, 7.5954);

let sunriseStr = times.sunrise.getHours() * 100 + times.sunrise.getMinutes();
let sunriseEndStr = times.sunriseEnd.getHours() * 100 + times.sunriseEnd.getMinutes();

let sunsetStartStr = times.sunsetStart.getHours() * 100 + times.sunsetStart.getMinutes();
let sunsetStr = times.sunset.getHours() * 100 + times.sunset.getMinutes();

// get time of day
let d = date.getHours() * 100 + date.getMinutes();*/

function day(){
let day = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Zurich"}));

// display the current day of the month in two digits
let datetimeDisplayElement = document.getElementById("today");
datetimeDisplayElement.textContent = day.getDate().toString().padStart(2, '0');

let digits = day.getDate().toString().padStart(2, '0');
return digits;
}
setInterval(day, 1000);

//console.log(digits);


function date(){
  let local = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Zurich"}));
  let main = local.getHours() * 100 + local.getMinutes();
  return main;
}
setInterval(date, 1000);

function sunrise(){
  let times = SunCalc.getTimes(new Date(), 47.5462, 7.5954);
  let sunrise = times.sunrise.getHours() * 100 + times.sunrise.getMinutes();
  return sunrise;
}
setInterval(sunrise, 1000);

function sunriseEnd(){
  let times = SunCalc.getTimes(new Date(), 47.5462, 7.5954);
  let sunriseEndStr = times.sunriseEnd.getHours() * 100 + times.sunriseEnd.getMinutes();
  return sunriseEndStr;
}
setInterval(sunriseEnd, 1000);

function sunsetStart(){
  let times = SunCalc.getTimes(new Date(), 47.5462, 7.5954);
  let sunsetStartStr = times.sunsetStart.getHours() * 100 + times.sunsetStart.getMinutes();
  return sunsetStartStr;
}
setInterval(sunsetStart, 1000);

function sunset(){
  let times = SunCalc.getTimes(new Date(), 47.5462, 7.5954);
  let sunsetStr = times.sunset.getHours() * 100 + times.sunset.getMinutes();

  return sunsetStr;
}
setInterval(sunset, 1000);


let d = date();

//let d = 819; //sunrise test
//let d = 1200; //day test
//let d = 1651; //sunset test
//let d = 0; //night test

let sunriseStr = sunrise();
let sunriseEndStr = sunriseEnd();
let sunsetStartStr = sunsetStart();
let sunsetStr = sunset();



// main
  if (d >= sunriseStr && d <= sunriseEndStr) {
    //console.log('Sunrise');
    //riso visual
    textTurbulence.setAttribute("seed", "1");
    gradientColor1.setAttribute("style","stop-color:#ffdf52; stop-opacity:1");
    gradientColor2.setAttribute("style","stop-color:#7cba79; stop-opacity:1");

    //the cleaner ways all seemed more complicated for my level so it is ugly :(
    gradient1.setAttribute("cx", "70%");
    gradient1.setAttribute("cy", "80%");
    gradient1.setAttribute("r", "90%");
    gradient1.setAttribute("fx", "0%");
    gradient1.setAttribute("fy", "80%");

    gradient2.setAttribute("cx", "20%");
    gradient2.setAttribute("cy", "40%");
    gradient2.setAttribute("r", "120%");
    gradient2.setAttribute("fx", "30%");
    gradient2.setAttribute("fy", "100%");

    //riso position
    Object.assign(box1.style,sunrisePosition);
    Object.assign(box2.style,sunrisePosition);

    box1copy.setAttribute("style", "display: none;");
    box2copy.setAttribute("style", "display: none;");

    //turbulence
    marquee[0].style.marginTop = "-10cm";
    zoom[0].style.scale = "200%";

    noiseLines1.setAttribute("baseFrequency","0.02");
    noiseLines2.setAttribute("baseFrequency","0.02");
    noiseLines3.setAttribute("baseFrequency","0.02");

    displacementLine1.setAttribute("scale", "200");
    displacementLine2.setAttribute("scale", "200");
    displacementLine3.setAttribute("scale", "200");

} else if (d > sunriseEndStr && d < sunsetStartStr) {
    //console.log('Day');
    //riso visual
    textTurbulence.setAttribute("seed", "2");
    gradientColor1.setAttribute("style","stop-color:#7cba79; stop-opacity:1");
    gradientColor2.setAttribute("style","stop-color:#1940ff; stop-opacity:1");

    gradient1.setAttribute("cx", "70%");
    gradient1.setAttribute("cy", "50%");
    gradient1.setAttribute("r", "120%");
    gradient1.setAttribute("fx", "50%");
    gradient1.setAttribute("fy", "50%");

    gradient2.setAttribute("cx", "30%");
    gradient2.setAttribute("cy", "60%");
    gradient2.setAttribute("r", "120%");
    gradient2.setAttribute("fx", "70%");
    gradient2.setAttribute("fy", "100%");

    //riso position
    Object.assign(box1.style,dayPosition);
    Object.assign(box2.style,dayPosition);

    Object.assign(box1copy.style,dayPosition2);
    Object.assign(box2copy.style,dayPosition2);

    //turbulence
    marquee[0].style.marginTop = "-10cm";
    zoom[0].style.scale = "150%";

    noiseLines1.setAttribute("baseFrequency","0.007");
    noiseLines2.setAttribute("baseFrequency","0.007");
    noiseLines3.setAttribute("baseFrequency","0.007");
    noiseLines1.setAttribute("seed","21");
    noiseLines2.setAttribute("seed","11");
    noiseLines3.setAttribute("seed","13");

    displacementLine1.setAttribute("scale", "120");
    displacementLine2.setAttribute("scale", "120");
    displacementLine3.setAttribute("scale", "120");

} else if (d >= sunsetStartStr && d <= sunsetStr) {
    //console.log('Sunset');
    //riso visual
    textTurbulence.setAttribute("seed", "1");
    gradientColor1.setAttribute("style","stop-color:#d95977; stop-opacity:1");
    gradientColor2.setAttribute("style","stop-color:#0a1363; stop-opacity:1");

    gradient1.setAttribute("cx", "40%");
    gradient1.setAttribute("cy", "60%");
    gradient1.setAttribute("r", "100%");
    gradient1.setAttribute("fx", "20%");
    gradient1.setAttribute("fy", "70%");

    gradient2.setAttribute("cx", "90%");
    gradient2.setAttribute("cy", "40%");
    gradient2.setAttribute("r", "110%");
    gradient2.setAttribute("fx", "20%");
    gradient2.setAttribute("fy", "90%");

    //riso position
    Object.assign(box1.style,sunsetPosition);
    Object.assign(box2.style,sunsetPosition);

    box1copy.setAttribute("style", "display: none;");
    box2copy.setAttribute("style", "display: none;");

    //turbulence
    marquee[0].style.marginTop = "-5cm";
    zoom[0].style.scale = "300%";

    noiseLines1.setAttribute("baseFrequency","0.05");
    noiseLines2.setAttribute("baseFrequency","0.05");
    noiseLines3.setAttribute("baseFrequency","0.05");
    noiseLines1.setAttribute("seed","21");
    noiseLines2.setAttribute("seed","11");
    noiseLines3.setAttribute("seed","13");

    displacementLine1.setAttribute("scale", "200");
    displacementLine2.setAttribute("scale", "200");
    displacementLine3.setAttribute("scale", "200");

} else {
    //console.log('Night');
    //riso visual
    textTurbulence.setAttribute("seed", "4");
    gradientColor1.setAttribute("style","stop-color:#141414; stop-opacity:1");
    gradientColor2.setAttribute("style","stop-color:#1940ff; stop-opacity:1");
    
    gradient1.setAttribute("cx", "90%");
    gradient1.setAttribute("cy", "80%");
    gradient1.setAttribute("r", "100%");
    gradient1.setAttribute("fx", "90%");
    gradient1.setAttribute("fy", "100%");
    gradient2.setAttribute("cx", "10%");
    gradient2.setAttribute("cy", "80%");
    gradient2.setAttribute("r", "140%");
    gradient2.setAttribute("fx", "80%");
    gradient2.setAttribute("fy", "60%");

    //riso position
    Object.assign(box1.style,nightPosition);
    Object.assign(box2.style,nightPosition);

    Object.assign(box1copy.style,nightPosition2);
    Object.assign(box2copy.style,nightPosition2);

    //turbulence
    marquee[0].style.marginTop = "-18cm";

    noiseLines1.setAttribute("baseFrequency","0.005");
    noiseLines2.setAttribute("baseFrequency","0.005");
    noiseLines3.setAttribute("baseFrequency","0.005");
    
    displacementLine1.setAttribute("scale", "100");
    displacementLine2.setAttribute("scale", "100");
    displacementLine3.setAttribute("scale", "100");

    }



/*
// array tests --> ignore
let duration
let sunsetArray = [];

for (let i = sunsetStartStr; i <= sunsetStr; i++) {
   
    duration = i;

    sunsetArray = [duration];
    console.log(sunsetArray);
 
}

//returns string of minutes between start and end of sunset
let duration = '';
let array = [];

for (let i = sunsetStartStr; i < sunsetStr; i++) {
  duration = duration + i;

  //check if current time aligns with sunset duration using i
  if (d === i) {
    console.log('sunset i: yes');
    } else {
    console.log('sunset i: no');
 }
 console.log(array.some(duration + i));
}

console.log('duration ' + duration);

//console logs

console.log(`${d}`);

console.log('sunrise start: ' + sunriseStr);
console.log('sunrise end: ' + sunriseEndStr);

console.log('sunset start: ' + sunsetStartStr);
console.log('sunset end: ' + sunsetStr);

//check if current time aligns with sunrise start

if (d === sunriseStr) {
    console.log('sunrise: yes');
} else {
    console.log('sunrise: no');
  }

//check if current time aligns with sunset start

  if (d === sunsetStartStr) {
    console.log('sunset: yes');
} else {
    console.log('sunset: no');
  }
*/


//refresh();

/*setInterval(refresh, 1000);*/

//Animation becomes choppy, as it is part of the function, which refreshes every second.
//Find a way to optimize this, possibly running the function only when the time matches the action (eg. sunset = time is true), or add only the times to the function and use return?
//Promise? Callback?