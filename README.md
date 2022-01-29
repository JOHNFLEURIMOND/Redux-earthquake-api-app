# :checkered_flag:What It Looks Like :checkered_flag:: 
https://redux-earthquake-app.netlify.app
# How It's Made :nut_and_bolt:🔨 :hammer::wrench::
 This application built with React.js, Redux, Webpack.

 # How It's Works:white_check_mark::
1.) The client side sends a request to the backend server.

2.) The backend server response back with a message saying its connected.

## My Awesome Project && Lessons Learned :mortar_board::

I learned how to get React going without using `create-react-app` By using `Babel` which is code transpiler, it will ES6 Javascript and transpiles it to ES5 Javascript which will be readable for more modern browser. With plugins `preset-env` that helps compiles to ES5 but also takes the browser into play for the environment setup  `preset-react` that helps compiles the jsx syntax, other plugings to help with the syntax tree to help with the source code. 

`Webpack` is a module bundler that all of your Javascript files and creates one big file. It will sort all dependencies and configure scope. I defined my entry point at `Main.js`, this is where I tell webpack to started looking for other dependencies, so it can make a dependency graph. It will parse this javascript file and view all imports there and create another Abstract Syntax Tree, kind like babel but looks for import statements depending on other files and sort that and output one big file.

`React` is a library to build composable user interfacts. Composablility being that system design princile of that deals with the inter relationships of components, like how each component contains its own state and being resuseable components. It is a one of the top Javascript frameworks. You don't need to use `Webpack` or `Babel`, you can easily use `npx create-react-app my-app`, `cd my-app`, and `npm start`, tada! you have yourself an app but I wanted to challenge my self.

## Redux


# Portfolio :open_file_folder::

** :computer:   WEBSITE:** [John Fleurimond](http://johnfleurimond.com)

# How To Get It Started :arrow_forward: :

## Installation

1. Clone repo
2. run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
### `npm run prettier`
This corrects the format.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
