# New York Times best sellers list [![Build Status](https://travis-ci.org/matheusdc/nyt-best-sellers.svg?branch=master)](https://travis-ci.org/matheusdc/nyt-best-sellers)

## About this project

This project is hosted on [Github Pages](https://matheusdc.github.io/ifood-frontend-test), and has an automated deploy using Travis.

## Development Environment

In order to run this project locally, create a `.env.local` file with your New York Times API key:
```
REACT_APP_NYT_APP_KEY=
```

Then, run the following commands to install and serve the project:
```
npm install
npm start
```

Open the URL bellow to test the app:
```
http://localhost:3000
```

## Project Details

The initial boilerplate was created using `create-react-app`.

Technologies used for this project:
* React Components using Hooks API
* UI Framework: [Ant Design](https://ant.design/)
* State Management: Redux/Redux-Saga
  * Redux Saga simplifies async call using redux.
* Axios for API Calls
* Continuous Integration: Travis CI
* Javascript Coding Standard: Airbnb
  * VSCode ESlint plugin
* CSS Coding Standard : [BEM](http://getbem.com/introduction/)
  * For the sake of simplicity, no CSS preprocessor was used. When an Ant Design component was customized, the `style` atribute was used to avoid complex CSS rules.
