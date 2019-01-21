Web application to simulate booking a currently showing movie

[Live Demo](https://cinema-ticket-booker.netlify.com/)

The Technologies used in this project are:

- Language: [Typescript](https://www.typescriptlang.org/)
- Framework: [React](https://reactjs.org/)
- Template: [Create React App](https://github.com/facebook/create-react-app).
- Styling: [Emotion](https://emotion.sh/)
- Theme: [Material Design](https://material-ui.com/)
- APIs: [The movie DB](https://www.themoviedb.org/)
- Code formatting: [Prettier](https://prettier.io/)

## Running the project locally

`git clone https://github.com/JonathanHalpern/cinema-ticket-booker`
`cd ./cinema-ticket-booker`
`npm i` or `yarn`

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Points for improvement

- Use an Apollo server to expose a GraphQL API for the MovieDB. This would allow more efficient queries.

- Send a second query to the API to get the release_date object, which contains the movie certification.
  Use this to restrict 'child' ticket sales on movies with a rating 15+.

- Add a search bar to the top so that the user can filter which movies are shown.

- Use React Suspense to show a loading component while the API fetches data

- Add Snapshot tests to components
