# Polling App

## Description

View and vote on user generated polls. GraphQL, Apollo and React. The frontend and server applications are both in this repo, however are independent of each other to enable flexible deployment.

## Status

In development.

## How To Run Locally

### 1. Setup a [`prisma`](https://github.com/graphcool/prisma) database

If you don't know how to do this, you can do the following.

```
mkdir temp-project
cd temp-project
yarn global add -g prisma
prisma init // select minimal setup option when this runs
prisma deploy
prisma reset
```

Keep the returned endpoint details handy for step 2.

### 2. Setup Environment Variables

One way to do this is by creating a `.env` file in the `server` directory. The project is configured to expose any variables set in `.env` to the node application.

You can derive your PRISMA_ENDPOINT and PRISMA_CLUSTER values via the output of step 1.

```
# Environment variables
PRISMA_STAGE="dev"
PRISMA_ENDPOINT="<YOUR ENDPOINT>" # eg. https://eu1.prisma.sh/public-chocolatewanderer-111/server/dev
PRISMA_CLUSTER="<YOUR CLUSTER>" # eg. public-chocolatewanderer-111/prisma-eu1
PRISMA_SECRET="yoursecret"
APP_SECRET="yoursecret"
```

### 3. Deploy to Prisma

From the `server` folder of this project, simply run `prisma deploy`. That's it! We're ready to start the GraphQL server.

### 4. Start GraphQL Server

In the `server` directory run the following

```
yarn install
yarn start
```

### 5. Start React Development Server

From the root directory run:

```
yarn install
yarn start
```
