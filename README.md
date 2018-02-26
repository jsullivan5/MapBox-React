# MapBox Tutorial

This project was made to adapt a tutorial on MapBox into a React/Redux context.  MapBox has a lot of helpful resources for using the API,
but not much in regards to React and Redux.  This project React-ifies one of those tutorials.  The app uses some sample GeoJson Data to make a store locator that allows the user to interact with the map and a list of locations.

[Original Tutorial](https://www.mapbox.com/help/building-a-store-locator/)

And just for fun, I dockerized it and deployed the project to Amazon's Elastic Container Service.

The deployed application can be viewed at:

Type in browser:
```
35.171.159.239
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
git
```

```
npm
```

(optional)
```
docker
```

### Installing

```
git clone git@github.com:jsullivan5/mapbox.git

```

```
npm install
```

Start Dev Server:

```
npm start
```
Or
```
docker build -t sample-app .
```
```
docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3000:3000 \
  --rm sample-app
```
Stop by killing the dev server

Or
```
docker-compose up -d --build
```
To Stop
```
docker-compose stop
```

## Running the tests

```
npm test
```

### Break down into end to end tests

Tests coming soon...

## Deployment

For an optimized production build:

```
npm build
```
Or for an optimized production Docker image:

```
docker build -f Dockerfile-prod -t map-box-prod .
```

Spin up the container:
```
docker build -f Dockerfile-prod -t map-box-prod .
```
Or
```
docker-compose -f docker-compose-prod.yml up -d --build
```

## Built With

* [Create React App](https://github.com/facebook/create-react-app) - Bootstrapped with
* [React Redux](https://github.com/reactjs/react-redux) - State management
* [MapBoxGl](https://www.mapbox.com/mapbox-gl-js/api/) - Maps API
