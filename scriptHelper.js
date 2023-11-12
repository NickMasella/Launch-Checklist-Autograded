// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = 
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}" alt = "planet" >`;
 }
 

 function validateInput(testInput) {
    if (testInput === "" || testInput === null){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Not a Number"){
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    } else{
        alert("invalid pilot entry!");
    }
    if (validateInput(copilot) === "Not a Number"){
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    } else{
        alert("invalid copilot entry!");
    }
    if (validateInput(fuelLevel) === "Is a Number"){
        if (fuelLevel < 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
    }   else {
        alert("invalid fuel level entry!");
    }
    if (validateInput(cargoLevel) === "Is a Number"){
        if (cargoLevel > 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } 
         else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    } else {
        alert("invalid cargo level entry!");
    }
    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && fuelLevel >= 10000 && cargoLevel <= 10000){
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }
 }
    

    
    // if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === ""){
    //     window.alert("All entries are required.");
    // } 

 
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");//.then( function(response) {
        //console.log(response.json());
        //return response.json();
     //});
    planetsReturned = await planetsReturned.json()
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    index = Math.floor(Math.random()*planets.length);
    return planets[index];
    // let names = [];
    // for (let i = 0; i < planets.length; i++){
    //     names[i] = planets[i].name;
    // }


 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;