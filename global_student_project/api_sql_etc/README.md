1. First understand: What exactly is an API?
API stands for Application Programming Interface.

Consider these two addresses:
1. https://www.google.com
2. https://api.open-meteo.com/v1/forecast
An API can also perform actions, not just provide information. 
For example, an API might create a user account, save a record, 
or process a payment.

The process:
1. User enters a city name.
2. JavaScript receives the city name.
3. JavaScript creates an API request.
4. The browser sends an HTTP request over the internet.
5. The server processes the request.
6. The server sends an HTTP response.
7. JavaScript reads the response.
8. JSON data is converted into JavaScript objects.
9. HTML displays the weather information.
We will study each step rather than treating fetch() as magic.

3. API concepts you must learn
Here is the learning sequence I recommend.
Concept	What you will understand
Client and server	How applications communicate
HTTP and HTTPS	    How internet requests travel
API endpoints	    Where requests are sent
GET and POST	    How to request and submit data
URL parameters	    How to send city names and settings
JSON	            How API data is structured
HTTP status codes	How to understand errors
Headers	            How additional request information is sent
API keys	        How authentication works
REST API	        How REST-style services are designed
Async/Await	        How JavaScript handles network operations
Error handling	    How to manage failed requests
Rate limits	        How to avoid too many requests
CORS	            Why browsers sometimes block API requests
 # in browser copy this request you will get response

https://api.open-meteo.com/v1/forecast
?latitude=33.6844
&longitude=73.0479
&current=temperature_2m,relative_humidity_2m,wind_speed_10m
&timezone=auto

Understand its components:
URL component	        Meaning
https://	        Secure communication
api.open-meteo.com	API server
/v1/forecast	    API endpoint
latitude	        Location latitude
longitude	        Location longitude
current         	Weather variables requested
timezone	        Local timezone handling

The question mark ? starts the query parameters. 
The ampersand & separates them.
What just happened?
- Chrome acted as your API client.
- Chrome sent an HTTP GET request.
- Open-Meteo processed the request.
- The server returned an HTTP response.
- Chrome displayed the JSON response

# Step 4 — Make the same request using JavaScript
Now open script.js and write:

const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=33.6844&longitude=73.0479&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto";

async function getWeather() {

    try {

        // Send request to API server
        const response = await fetch(apiURL);

        // Check server response
        if (!response.ok) {
            throw new Error("API request failed: " + response.status);
        }

        // Convert JSON response into JavaScript object
        const data = await response.json();

        // Display complete response
        console.log(data);

        // Extract individual values
        console.log("Temperature:", data.current.temperature_2m);
        console.log("Humidity:", data.current.relative_humidity_2m);
        console.log("Wind:", data.current.wind_speed_10m);

    } catch (error) {

        console.error("Error:", error.message);

    }
}

getWeather();

# Open your index.html with a local development server 
(for example, VS Code Live Server), then open Chrome Developer 
Tools using F12 and select Console.

You should see the returned weather data.
# Step 5 — Understand every JavaScript instruction
Code	          What it actually does
async	        Allows asynchronous operations in a function
fetch(apiURL)	Sends an HTTP request
await	        Waits for an asynchronous result
response	    Contains the server's response
response.ok	Checks whether HTTP status is successful
response.json()	  Reads and parses JSON response data
data.current	  Accesses the current weather object
try/catch	      Handles errors

HTTP status	Meaning
200	Successful request
201	Resource created
400	Bad request
401	Authentication required or invalid
403	Access forbidden
404	Resource not found
429	Too many requests
500	Internal server error
503	Service unavailable

4. A very simple first API(your own api for others)
#Install Node.js, create a project folder, and run:
npm init -y
npm install express

Create server.js:

const express = require("express");

const app = express();

app.get("/api/gold", (req, res) => {

    const goldData = {
        success: true,
        currency: "PKR",
        unit: "gram",

        gold: {
            "24K": 42500,
            "22K": 38958,
            "21K": 37187,
            "18K": 31875
        }
    };

    res.json(goldData);

});

app.listen(3000, () => {
    console.log("API running on port 3000");
});

Run:

node server.js

Open this URL in your browser:

http://localhost:3000/api/gold

Congratulations! You have created your first API endpoint.