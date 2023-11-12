// Write your JavaScript code here!
// const {formSubmission} = require("./scriptHelper.js");

// const { myFetch } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const  formSubmission  = require("./scriptHelper");

window.addEventListener("load", function() {
    const button = document.getElementById("formSubmit");
    console.log("hi");
    button.addEventListener("click", function(event){
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    listedPlanets = myFetch();
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        result = pickPlanet(listedPlanets);
        addDestinationInfo(document, result.name, result.diameter, result.star, result.distance, result.moons, result.imageUrl);
    })
    
 });