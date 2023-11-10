// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 

 function validateInput(testInput) {
    if (testInput === ""){
        window.alert("All fields are required.");
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot) === "Not a Number"){
        console.log("pilot");
        list[0].innerHTML = `${pilot}: Pilot Ready`;
    } else{
        window.alert("invalid pilot entry!")
    }
    if (validateInput(copilot) === "Not a Number"){
        console.log("copilot");
        list[1].innerHTML = `${pilot}: Copilot Ready`;
    } else{
        window.alert("invalid copilot entry!")
    }
    if (validateInput(fuelLevel) === "Is a Number"){
        console.log("yes");
        if (fuelLevel < 10000){
            list[4].style.visibilty = "visible";
        } 

    } else {

    }
    

    
    // if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === ""){
    //     window.alert("All entries are required.");
    // } 

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;