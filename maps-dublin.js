// VARIABLES
  let map;

// CITY VARIABLES 
  const dublin = { lat: 53.34664, lng: -6.271798 }
  // const cork = { lat: 51.898627, lng: -8.4705942 }
  // const galway = { lat: 53.2744122, lng: -9.0490632 }

// ICON VARIABLES 
  const hotel = 'http://maps.google.com/mapfiles/kml/pal2/icon20.png'
  const bars = 'http://maps.google.com/mapfiles/kml/pal2/icon19.png'
  const restaurant = 'http://maps.google.com/mapfiles/kml/pal2/icon63.png'
  const touristAttractions = 'http://maps.google.com/mapfiles/kml/pal4/icon46.png'

// MAP FUNCTION START
  function initMap() {

    // MAP OPTIONS 
    const mapProp = {
      center: dublin,
      zoom: 15,
    };

// CREATE THE MAP 
    map = new google.maps.Map(document.getElementById("map"), mapProp);

// MY MARKERS DUBLIN HOTELS
var dublinHotels = [
  {"lat": 53.33897089760341, "lng": -6.256107687950135, "name": "The Shelbourne Hotel", 
  "information": `<b>Address</b>: 27 St Stephen's Green, Dublin, D02 K224, <br> 
  <b>Phone</b>: +3535 1 663 4500 <br>
  <a href="https://www.theshelbourne.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.35161855, "lng": -6.260316065714047, "name": "The Gresham Hotel", 
  "information": `<b>Address</b>: 23 O'Connell Street Upper, Dublin, D01 C3W7, <br>
  <b>Phone</b>: +353 1 874 6881 <br>
  <a href="https://www.gresham-hotels-dublin.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.339953550000004, "lng": -6.264855223428146, "name": "The Marlin Hotel", 
  "information": `<b>Address</b>: 11 Bow Ln E, St Stephen's Green, Dublin, D02 AY81, <br>
  <b>Phone</b>: +353 1 522 2000 <br>
  <a href="https://www.marlinhotel.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.3483874, "lng": -6.277675, "name": "Generator Hostel Smithfield", 
  "information": `<b>Address</b>: Generator Hostel, Smithfield, Dublin, D07 F2VF, <br>
  <b>Phone</b>: +353 1 901 0222 <br>
  <a href="https://staygenerator.com/hostels/dublin?lang=en-GB&gclid=CjwKCAjwxuuCBhATEiwAIIIz0YWGaDpOxXDMo51eGQunYbMZkRj5MIJNbG0m5wi5prManHf_bGNBiBoCSXsQAvD_BwE&gclsrc=aw.ds" target=”_blank”>Website Here</a>`},

  {"lat": 53.345388799999995, "lng": -6.241403637369489, "name": "The Clayton Hotel", 
  "information": `<b>Address</b>: Sir John Rogerson's Quay, Docklands, Dublin, D02 YT21, <br>
  <b>Phone</b>: +353 1 643 9500 <br>
  <a href="https://www.claytonhotelcardifflane.com/?nst=0&gclid=CjwKCAjwxuuCBhATEiwAIIIz0Qd7aaemBOTIc0i4t8hP5glZ4AkDtU2WveMHcAHu1NIYnquwocgCSBoCSvcQAvD_BwE&gclsrc=aw.ds”>Website Here</a>`},

  {"lat": 53.34834, "lng": -6.25869, "name": "Wynn's Hotel Dublin", 
  "information": `<b>Address</b>: 35-39 Abbey Street Lower, North City, D01 C9F8, <br>
  <b>Phone</b>: +353 1 874 5131 <br>
  <a href="https://www.wynnshotel.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.34307, "lng": -6.27042, "name": "Jurys Inn Christchurch Hotel", 
  "information": `<b>Address</b>: 8 Christchurch Pl, Dublin 8, D08 REK7, <br>
  <b>Phone</b>: +353 1 454 0000 <br>
  <a href="https://www.jurysinns.com/hotels/dublin/christchurch" target=”_blank”>Website Here</a>`},

  {"lat": 53.34673, "lng": -6.26577, "name": "The Morrison Hotel", 
  "information": `<b>Address</b>: 15 - 19 Ormond Quay Lower, North City, Dublin, D01 K5X5, <br>
  <b>Phone</b>: +353 1 887 2400 <br>
  <a href="https://www.morrisonhotel.ie/" target=”_blank”>Website Here</a>`},
];