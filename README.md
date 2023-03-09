# React hooks typescript Google maps integration

Hi! Had to integrate google maps on a client's project a few months ago and it did take me a while, so I thought to share a simple working  example using react hooks and typescript.

The demo makes use of the **Maps API, Places API, Distance Matrix API** and **Directions API** to calculate the distance (in miles) and travel duration (driving) between point A and B. It can also draw the route on the map.

**A valid Google API key with the above API services enabled is required for this example to work.**

It is worth noting that there are a few npm packages available, but my preferred one is [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api).
Also since we are using typescript, the [@types/google.maps](https://www.npmjs.com/package/@types/google.maps) package is required. 

Will try to keep expanding the example's functionality whenever I have time.

![enter image description here](https://stel.dev/img/react-ts-google-maps-example.gif)

