# React.js boilerplate

## ❗ Prerequisites

- [Git](https://git-scm.com/downloads) (version >= 2.29.2)
- [Node.js LTS](https://nodejs.org) (version >= 14.15.1)
- [Docker](https://docs.docker.com/get-docker/) (version >= 19.03.13)
- [Docker Compose](https://docs.docker.com/compose/install/) (version >= 1.27.4)

***

## 👋 Intro

ℹ️ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
🔍 Specifically:

- Routing and navigation:
  - [React Router for web](https://reactrouter.com/web/guides/quick-start)
- Flux architecture:
  - [Redux](https://redux.js.org/introduction/getting-started)
  - Redux wrapper: [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
- Code Linting with:
  - [Eslint](https://github.com/eslint/eslint)
  - [Stylelint](https://github.com/stylelint/stylelint)
- Tests:
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

👾 Git flow:

- Standardize Git commit messages:
  - [Commitizen](https://github.com/commitizen/cz-cli) \
    Simply use `git cz` or just `cz` instead of `git commit` when committing

🎬 Check production build:

- In a terminal run command `docker-compose up`
- Open [http://localhost:5000](http://localhost:5000) to view it in the browser

***

## 👉 Before start

- Install dependencies `npm install`
- Create .env file:

```
# Docker
NODE_VERSION=14.15.1
DOCKER_TIMEZONE=Europe/Kiev
```

***

## 🚀 Available Scripts:

In the project directory, you can run:

###### `npm run dev`

> Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm run build`

> Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

##### `npm run analyze`

> To analyze the bundle run the production build then run the analyze script.

##### `npm run styleguide`

> Runs the styleguide.\
Open [http://localhost:6060](http://localhost:6060) to view it in the browser.

##### `npm run test:once`

> Launches the test runner

##### `npm run test:watch`

> Runs the test watcher in an interactive mode.\
By default, runs tests related to files changed since the last commit.

***

## 📖 Docs

- [Understanding the file structure](docs/file-structure.md)
- [React.js documentation](https://reactjs.org/)
- [Create React App](https://github.com/facebook/create-react-app)
