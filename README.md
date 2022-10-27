# WebClient

Between Freedom and Space SPA frontend. Supports running in Docker.
All configuration data and properties are in `.env` [file](./.env.test).


## Features:
* React.ts, Redux, BrowserRouting
* Containerization with Docker
* Kubernetes
* Webpack
* Frontend microservices
* CSS post processor
* Unit Tests

## Git Flow:

### Feature/Task/Bug from task tracker:

1. Checkout to `develop`
2. Create new branch with pattern `BFS-<some number>`
3. Do task, write tests and check functionality
4. Create Pull Request from your branch to `develop`
5. Wait until it approved

### External feature:

1. Fork repository to your profile
2. Checkout to `develop`
3. Create new branch with pattern `external/<very short description>`
4. Implement all logic you want
5. Create Pull Request from your branch to `develop`
6. Wait until test passed and it approved

## Release:

### Release to testing stage:
* At any moment you can deploy application to testing stage
* Open GitHub actions and chose `Deploy Web-Client to testing stage`
* Click `Run workflow`, input all required data and wait approve
* Wait release flow end

### Release to production stage:
* Only [Ferum-bot](https://github.com/Ferum-bot) can deploy application to production stage
* Create new branch from `develop` with pattern `Release-<release number>`
* Create Pull Request to `main` branch
* Wait until all tests passed and all participants approved
* After merge [Ferum-bot](https://github.com/Ferum-bot) will deploy application to production stage

## How to launch:
* Run `npm install && npm run start`
* Launch [Docker container](./Dockerfile)

#### Created and powered by Ferum-bot.
