Coding exercise to build a movie ticket booker

[Demo](https://cinema-ticket-booker.netlify.com/)

The Technologies used in this project are:

- Language: [Typescript](https://www.typescriptlang.org/)
- Framework: [React](https://reactjs.org/)
- Template: [Create React App](https://github.com/facebook/create-react-app).
- Styling: [Emotion](https://emotion.sh/)
- Theme: [Material Design](https://material-ui.com/)
- APIs: [The movie DB](https://www.themoviedb.org/)
- Code formatting: [Prettier](https://prettier.io/)

## Environment Variables

The API calls use a variable called REACT_APP_THE_MOVIE_DB_ACCESS_TOKEN
You will need to register for an API key with [The movie DB](https://www.themoviedb.org/)
Store the variable in a .env file to run locally

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Points for improvement

Use an Apollo server as middleware to themoviedb so that GraphQL can be used. This would allow more efficient queries.

Send a second query to the API to get the release_date object, which contains the movie certification.
Use this to restrict 'child' ticket sales on movies with a rating 15 or 18.

Add a search bar to the top so that the user can filter which movies are shown.
