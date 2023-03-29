[demo page](https://shydie.github.io/shape-editor/)

## Configuration
App provides basic React+Redux configuration with [feature based](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks) folder structure. Sample feature included in `src/features` folder, note technology agnostic `features` folder name. Based on Redux maintainers recommendation.
 It also includes the Redux devtools browser extension and enforces consistent formatting with Prettier.
Eslint extends CRA ESLint rules with a custom set, tailored for the reasonable and clean development process.

## Steps to perfection
I would like to have more test coverage, but testing `react/three-fiber` components requires a complex setup. As a result, I have only added unit tests for reducers and the `findClosestPoint` function since they do not rely on external libraries.

## New technologies
The major new thing for me was definetyly `Three.js`. I've had some experience before with parsing files for Three.js, but I've never used it as drawing/editing shapes tool. While it may have been easier to work with Three.js in a more traditional manner, I found it interesting to manage it declaratively with `react/three-fiber`. Additionally, `react/three-fiber` has some useful testing tools, although they did not work out of the box and I had to skip them for now.
The biggest unknown for me was configuring the camera and its unprojection, which ended up being a significant time-waster.

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

- `yarn lint` - lints project files according to eslint rules, see below. Typical use case: continuous integration environments, Travis, CircleCI, etc.

- `yarn fix` - same as `yarn lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.