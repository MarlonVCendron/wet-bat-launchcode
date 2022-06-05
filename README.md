# Wet Bat Travel - Launchcode Challenge

A small full-stack prototype for an imaginary travel agency developed as a challenge for the company Launchcode.

The frontend is built with TypeScript and ReactJS, uses Chakra UI for the UI and MobX to manage the state.

The backend is built with TypeScript and Express, it uses Objection ORM + Knex.js to communicate with the PostgreSQL database.

#### This project is currently being hosted in <https://wet-bat.xyz>

## Summary

- ### [Dependencies](#dependencies)
- ### [Final Product](#final-product)
- ### [Frontend](#frontend)
- ### [Backend](#backend)

## Dependencies

- TypeScript
- Node.js
- Express
- Knex
- Objection ORM
- ReactJS
- MobX
- Chakra UI
- MUI
- Leaflet
- Formik
- Recharts
- Material table

# Final Product

The final product is hosted in <https://wet-bat.xyz>

### Demonstration

https://user-images.githubusercontent.com/38591551/172062874-7b5bd340-ba21-41e6-b74f-89f1df6f869a.mp4


### Dashboard

![Full-page](https://user-images.githubusercontent.com/38591551/172062273-388b208f-cb1a-49a3-a8a6-cf0213723a4d.png)

### Quotes Page

![Quotes-page](https://user-images.githubusercontent.com/38591551/172062446-f0a6a736-4540-4a9b-bb87-9043e64b1451.png)


### Edit Quote Page

![Edit-page](https://user-images.githubusercontent.com/38591551/172062438-47550006-248e-4ba3-80a1-4fcfe096680c.png)


### Mobile Dashboard

<p align="center">
<img src="https://user-images.githubusercontent.com/38591551/172062308-606e70ad-6f58-4d3d-a936-fb46632ec2df.png"/>
</p>

# Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Backend

The files for the backend are in `/server`. To configure the connection to PostgreSQL, you should make a `/server/.env` file similar to `/server/.env.example`.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all dependencies

### `yarn dev`

Runs the app in the development mode.\
API listens on [http://localhost:5000](http://localhost:5000).

### `yarn build`

Builds the API to the `dist` directory.

### `yarn start`

Runs the API after it has been built.

### `knex migrate:latest --knexfile knexfile.ts`

Runs the migrations.

### `knex seed:run --knexfile knexfile.ts`

Runs the seed files.
