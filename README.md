I followed a tutorial on creating an Instagram clone for this project. The application was developed using React, Firebase, and Tailwind CSS. I successfully implemented various pages, including login, sign up, dashboard, and the user profile page. These pages serve different purposes, with some accessible to the public and others requiring authentication through auth listeners. To manage data, I utilized Firebase Firestore and created a custom hook to retrieve the necessary information.

While working on this project, I had the opportunity to explore Tailwind CSS, and I thoroughly enjoyed its benefits. Previously, I relied on styled components, but I have now transitioned all my projects to Tailwind CSS due to its user-friendly nature. However, I have decided that this will be my final project utilizing Firebase. I found it to be overly complex for my needs, particularly in terms of testing. Jest lacks a comprehensive mocking library for Firebase, resulting in repetitive code within the tests.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
