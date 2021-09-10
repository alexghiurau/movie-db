# Movie DB

A simple database of movies. Uses json-server as a database. You can add, edit, delete and see movies.

## Prerequisites

node.js/npm, JavaScript enabled web browser

## Installation

To install dependencies:

```
npm install
```

## Usage

To start the app, type into the terminal:

```
npm run dev
```

This will start the front-end on port 3000 and the json-server on port 5000.

## To do

1. Implement search feature.
2. Improve layout and use of space.
3. Improve Movie component to display more info (e.g. directors, actors, genre).
4. Add proper JSDoc documentation.
5. Fix the errors state, currently only logs to console.
6. Add proper startup script (needs dedicated backend).

## History

See commits.

## Reflection

Just a short paragraph here, I decided to use React as time was restricted for this challenge. I went with using Redux rather than React's built in hooks / context API because I wanted to practice using Redux.

I used JSON-server because for such a simple application with a single entity, I decided it was not worth building and connecting to a SQL database or a noSQL one such as MongoDB.

I used materialize css because it was quick to deploy, CSS can be time consuming during such challenges.

## License

To do...
