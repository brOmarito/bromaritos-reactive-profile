# brOmarito's REACTive Portfolio

The repo name is pretty telling in this case! It's my portfolio using React. It's got a small About Me section as the homepage, 
a Portfolio page to display some of the projects I've worked on, a Resume section where you can see a preview of my resume as 
well as the ability to download a PDF copy for yourself, and last but not least a Contact Me section. The Contact Me section does 
not currently send the message to me but this is a future improvement. As of now, it demonstrates the ability to validate fields.\
\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Improvements

There are definitely some areas I already have some improvements in mind, including:
* Adding navigation to the About Me section with different areas for information like Music, Video Games, Dog(s)!
* I want to add some functionality to display a load animation while the app renders the images in the various sections, especially 
the Resume section as the iFrame can take a second to load
* Add a text version of my Resume on the resume section in case you want to toggle the iFrame on and off
* Add send functionality to the Contact Me section to send the message to my email
* Add more pages and sections to the Navbar such as blog posts pertaining to Music, Video Games, etc.
* Once the new pages are implemented, add log in functionality to leave reactions

## Deployment

Check out my deployed portfolio here: https://bromarito.github.io/bromaritos-reactive-profile

## Screenshots

### About Me
![About Me](/src/images/aboutme-screen.PNG)

### Portfolio
![Portfolio](/src/images/portfolio-screen.PNG)

### Resume
![Resume](/src/images/resume-screen.PNG)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
