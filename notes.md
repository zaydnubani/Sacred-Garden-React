# Notes

## Package.json

The package json here will allow you to deploy to heroku and also develop using
custom scripts to make your life easier (at least saving a few seconds).

```json
{
  "name": "tech-friends",
  "version": "1.0.0",
  "description": "",
  "main": "server/server.js",
  "scripts": {
    "start": "node server/server.js",
    "develop": "npx concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && yarn install && cd ../client && yarn install",
    "seed": "cd server && npm run seed",
    "build": "cd client && npm run build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^5.1.0"
  }
}
```

### name

The name of your application.

```json
"name": "tech-friends",
```

### main

This is usually pointing to a server file.

```json
"main": "server/server.js",
```

### scripts

These scripts are all terminal commands that we use often. We often put these commands in the scripts section so we never forget what they are.

First script to start the webserver.

```json
"start": "node server/server.js",
```

Runs nodemon so the server will restart during development.

```json
"startNodemon": "cd server && npx nodemon server.js",
```

Start client and run the webserver

```json
"develop": "npx concurrently \"cd server && npm run watch\" \"cd client && npm run start\"",
```

Run the yarn installs (npm installs)

```json
"install": "cd server && yarn install && cd ../client && yarn install",
```

Run the seed scripts.

```json
"seed": "cd server && npm run seed",
```

Run the build scripts.

```json
"build": "cd client && npm run build"
```

### devDependencies

Development dependencies will not in heroku because we only use these packages for development.

This package is just used for running multiple commands.

```json
"concurrently": "^5.1.0"
```
