// Add console.log to check to see if our code is working.
console.log("working");

//////   EXAMPLES //////

////////////////// option 1 for unsing the setView() method - used with the CIRCLE map marker ///////////////////

// Create the map object with a center and zoom level.

////We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.////
////The mapid will reference the id tag in our <div> element on the index.html file.////
////The setView() method sets the view of the map with a geographical center, where the first coordinate ////
////is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.////

// let map = L.map('mapid').setView([34.0522, -118.2437], 14);


////////////////////    option 2 for using the setView() method - used with the map marker  /////////////////

// This method is useful when we need to add multiple tile layers, or a background image of our map(s), which we will do later in this module.
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


////////////     Add a Tile Layer for Our Map   /////////////////
// We create the tile layer that will be the background of our map.

//// We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.////
//// The following URLs appear in the parentheses of our tileLayer() method:////
//// The API URL with a reference to the accessToken////
//// The OpenStreetMap URL inside the curly braces of our tileLayer() method////
//// We add the maxZoom attribute and assign it a value of 18.////
//// We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.////
//// We add the accessToken attribute and assign it the value of our API_KEY.////
//// Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.////
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);






//////          FULL MAPS          ////



/////////////////          MAP WITH MARKERS          //////////////


// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);




//////////         MAP WITH CIRCLES -- skill drill  USING circle() function         ///////

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// create a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map.
// in order to change the map to dark, I had to modify the tileLayer (on the streets variable), from streets-v11 to dark-v10.
// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: "yellow",
//   fillOpacity: 0.1
// }).addTo(map);



///////         DARK MAP USING circleMarker() function - it displays the yellow circle bigger         ////////////


// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// create a light-yellow circle with black lines indicating a 300-pixel radius on a dark map.
// Edit your logic.js file from the previous Skill Drill by changing your circle()function to a circleMarker()function. 
// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: "yellow",
//   fillOpacity: 0.1
// }).addTo(map);






////////////// MAP WITH MULTIPLE MARKERS   ///////////


// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// // Get data from cities.js
// let cityData = cities;


///////In the forEach() function, assign the city variable to each object of the cities.js file.///////
/////// Then, get the coordinates of each city by adding city.location in the L.marker() function. ///////
/////// We can then add each location to the map with the addTo() function and pass themap object as the argument. /////
// // LOOP through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   //Add 5 markers to the map, 1 for each city object on the cities array.
//   L.circleMarker(city.location, {
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);  
// });



/////////////////   SKILL DRILL  -  MODULE 13.4.2   //////////////////



// Edit the logic.js file to create an orange circle popup marker for each city,
//  with a lineweight of 4, a radius where the population number is decreased by 200,000, 
//  that's on a dark map. When you click on the circle, the popup should display the city, state,
//  and the population formatted with a thousands separator.

// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Get data from cities.js
// let cityData = cities;

// // LOOP through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   //Add 5 markers to the map, 1 for each city object on the cities array.
//   L.circleMarker(city.location, {
//     radius: (city.population/1000000) -200000
//     color: "orange",
//     lineweight: 4
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);  
// });



///////////////////        MAP ONE LINE       /////////////////


// // add the coordinates for the center of the map to somewhere between LAX and SFO.
// // add the zoom level in the setView() method to 7.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Add the code for the line variable.
// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// // create a line on a map using the Leaflet polyline() function.
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);


///////////////////        MAP MULTIPLE LINES      /////////////////


// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// // Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);



/////////////////  MAP WITH BLUE DASHED LINE ON A LIGHT MAP    -    SKILL DRILL MODULE -- 13.4.3      /////////////////

// Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops,
//  Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). Make the route a blue dashed line,
//  with a weight of 4 and opacity of 0.5 on the light map.
// Hint: You'll need to find the coordinates for some of these airports.
// Bonus: Add your city or another city as a stopping point.


// Create the map object with a center.
// let map = L.map('mapid').setView([37.697948, -97.314835], 5);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// // Coordinates for each point to be used in the polyline.
// let line = [
//   [37.6213, -122.3790],
//   [30.1974292, -97.6663058],
//   [29.99022, -95.336783],
//   [43.68401, -79.610321]
// ];

// // Create a polyline using the line coordinates and make a blue dashed line.
// L.polyline(line, {
//   color: "blue",
//   opacity: 0.5,
//   lineweight: 4,
//   dashArray: "4 10"
// }).addTo(map);



///////////////////           MAP A GeoJSON POINT          ///////////////////


// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }


// }).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);



//////////        MAP A GeoJSON POINT with night preview and pooup box    -- SKILL DRILL MODULE 13.5.2      ///////////


// Edit your logic.js to create a popup marker for San Francisco Airport on a night preview navigation map.
//  When you click on the popup, it will display the city, state, and the name of the airport.


// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//   }

// }).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);




//////////////      MAP USING onEachFeature Function        ///////////


// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Aiport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>")
// } 

// }).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);



////////////////////        Map Multiple GeoJSON Points    + modifications from skill drill module 13.5.3     ///////////////



// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// // create the tile layer that will be  the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/BiancaTaisePommerening/Mapping_Earthquakes/main/majorAirports.json";

// /// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   // add a popup marker that displays all airports' codes and names.
//   L.geoJSON(data, {
//       onEachFeature:function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>Aiport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>")
//     }
//   }).addTo(map);
  
// });

//////////////////////         ADD MULTIPLE MAPS   + skill drill module 13.5.4       ////////////////////


// // create the tile layer that will be  the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // Create a base layer that holds both maps.
// let baseMaps = {
//     Street: streets,
//     Dark: dark
//   };

//   // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//     center: [30, 30],
//     zoom: 2,
//     layers: [streets]
// });

// L.control.layers(baseMaps).addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/BiancaTaisePommerening/Mapping_Earthquakes/main/majorAirports.json";

// /// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   // add a popup marker that displays all airports' codes and names.
//   L.geoJSON(data, {
//       onEachFeature:function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>Aiport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>")
//     }
//   }).addTo(map);
  
// });


//////////////////////           Map GeoJSON LineStrings              //////////////////


// // create the tile layer that will be  the background of our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // Create a base layer that holds both maps.
// let baseMaps = {
//     Light: light,
//     Dark: dark
//   };

//   // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//     center: [44.0, -80.0],
//     zoom: 2,
//     layers: [light]
// });

// L.control.layers(baseMaps).addTo(map);

// // Accessing the airport GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/BiancaTaisePommerening/Mapping_Earthquakes/main/torontoRoutes.json";

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });
  



////////////////////////////          SKILL DRILL module 13.5.5          /////////////////////

// // create the tile layer that will be  the background of our map.
// let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // Create a base layer that holds both maps.
// let baseMaps = {
//     Day: day,
//     Night: night
//   };

//   // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//     center: [44.0, -80.0],
//     zoom: 2,
//     layers: [night]
// });

// L.control.layers(baseMaps).addTo(map);

// // Accessing the airport GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/BiancaTaisePommerening/Mapping_Earthquakes/main/torontoRoutes.json";

// // Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }

// /// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   // add a popup marker that displays all airports' codes and names.
//   L.geoJSON(data, {
//     style: myStyle,
//       onEachFeature:function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " + feature.properties.dst + "</h3>")
//     }
//   }).addTo(map);
  
// });




////////////////////////////           Map GeoJSON Polygons        /////////////////////////



// // create the tile layer that will be  the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // Create a base layer that holds both maps.
// let baseMaps = {
//     "Streets": streets,
//     "SatelliteStreets": satelliteStreets
//   };

//   // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//     center: [43.7, -79.3],
//     zoom: 11,
//     layers: [satelliteStreets]
// });

// L.control.layers(baseMaps).addTo(map);

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/BiancaTaisePommerening/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// /// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   // add a popup marker that displays all airports' codes and names.
//   L.geoJSON(data).addTo(map);
// });



///////////////////////////      Map GeoJSON Polygons -      skill drill module 13.5.6            ///////////////////



// // Edit your logic.js file with the following changes:
// // Make the lines blue, with a weight of 1.
// // Make the polygon fill color yellow.
// // Add a popup to show each neighborhood.
// // Make the default map layer Streets with Satellite Streets as the second option.


// // create the tile layer that will be  the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // Create a base layer that holds both maps.
// let baseMaps = {
//     "Streets": streets,
//     "SatelliteStreets": satelliteStreets
//   };

//   // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//     center: [43.7, -79.3],
//     zoom: 11,
//     layers: [streets]
// });

// L.control.layers(baseMaps).addTo(map);

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/BiancaTaisePommerening/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// // Create a style for the lines.
// let myStyle = {
//   color: "blue",
//   weight: 1,
//   fillColor: "yellow"
// }

// /// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   // add a popup marker that displays all airports' codes and names.
//   L.geoJSON(data, {
//       style: myStyle,
//         onEachFeature:function(feature, layer) {
//           console.log(layer);
//           layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>")
//         }
//       }).addTo(map);
//   });


  ////////////////////////////       Add Earthquake Data to a Map            ////////////////////////////


  // create the tile layer that will be  the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
