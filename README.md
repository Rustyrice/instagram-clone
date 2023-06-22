This application was built using React, Firebase & Tailwind CSS. I have built the following pages within this application: login, sign up, dashboard & lastly the user profile page. There are four different pages, some are public and some are private with auth listeners. Firebase firestore handles all the data, and that data is retrieved using a custom hook.

I used Tailwind CSS for this project and I really enjoyed using it. I used styled components in my previous project, but I have now converted all my projects to Tailwind CSS for ease of use. This will be my last project using Firebase as it's far too complex to use and far too complex to test. With Jest, it's also tedious to test Firebase as there's no great mocking library, so you end up just repeating yourself in the tests a lot.

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
