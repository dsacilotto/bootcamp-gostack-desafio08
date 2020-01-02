<h1 align="center">
	bootcamp-gostack-desafio08
</h1>

<h3 align="center">
  Challenge 8: React Native - Redux + Hook
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dsacilotto/bootcamp-gostack-desafio08?color=%2304b4d3">
</p>

A simple React Native application that creates an e-commerce interface.
The app uses the Flux Architecture and React Hooks.

#### Application screen

![Screen](.github/screen.gif)

## Technologies

- [NodeJS 10.16.3](https://nodejs.org/)
- [ReactJS 16.9.0](https://reactjs.org/)
- [React Native 0.60.5](https://facebook.github.io/react-native/)
- [JSON Server 0.15.1](https://github.com/typicode/json-server)

## Run

```bash
# After clone the project
$ cd bootcamp-gostack-desafio08

# Install packages
$ yarn install
# or
$ npm install

# Run the app -> you need an Android device or emulador installed
$ react-native start
# you will need two new terminals
# one
# change XXX to your corresponding local IP (you may have to change the app baseURL on /src/services/api.js)
$ json-server --host 192.168.1.XXX server.json -p 3333
# two
$ react-native run-android

```

_Note.: this app has not been tested on iOS device_

---

This is part of my [GoStack](https://rocketseat.com.br/bootcamp) training
