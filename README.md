[demo page](https://shydie.github.io/shape-editor/)

## Configuration
App provides basic React+Redux configuration with [feature based](https://redux.js.org/style-guide/style-guide/#structure-files-as-feature-folders-or-ducks) folder structure. Sample feature included in `src/features` folder, note technology agnostic `features` folder name. Based on Redux maintainers recommendation.
 It also includes the Redux devtools browser extension and enforces consistent formatting with Prettier.
Eslint extends CRA ESLint rules with a custom set, tailored for the reasonable and clean development process.

## Steps to perfection
I would like to have more test coverage, but testing `react/three-fiber` components requires a complex setup. As a result, I have only added unit tests for reducers and the `findClosestPoint` function since they do not rely on external libraries.

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

- `yarn lint` - lints project files according to eslint rules, see below. Typical use case: continuous integration environments, Travis, CircleCI, etc.

- `yarn fix` - same as `yarn lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.