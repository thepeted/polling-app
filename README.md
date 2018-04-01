# Polling App

## Description
View and vote on user generated polls.  GraphQL, Apollo and React.

## Status
In development.

## How To Run

### 1. Deploy the [`prisma`](https://github.com/graphcool/prisma) database
```
cd server
yarn prisma deploy
```
Or without yarn
```
cd server
node node_modules/prisma/dist/ deploy
```

### 2. Setup Environment Variables
The easiset way to do this is by creating a `.env` file in the root directory.  The project is configured to inject variables declared in .env to `src/index.js`.

You can find your PRISMA_ENDPOINT and PRISMA_CLUSTER values via the output of step 1, or by running `yarn prisma info`

```
PRISMA_STAGE="dev"
PRISMA_CLUSTER="<YOUR CLUSTER>" # eg. public-chocolatewanderer-111/prisma-eu1
PRISMA_ENDPOINT="<YOUR ENDPOINT>" # eg. https://eu1.prisma.sh/public-chocolatewanderer-111/server/dev
PRISMA_SECRET="yoursecret"
APP_SECRET="yoursecret"
```

### 3. Start Server
In the `server` directory run the following
```
yarn install
yarn start
```

### 4. Start React Development Server
Coming Soon!
