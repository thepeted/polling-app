# Polling App

## Description

View and vote on user generated polls. GraphQL, Apollo and React.

## Project Structure

The frontend and server applications are both in this repo, however are independent of each other to enable flexible deployment.

## Status

In development.

## How To Run Bankend Server Locally

### 1. Check you have the pre-requisites

```
Node >= 9
Docker
```

### 2. Setup Environment Variables

You can set these directly, or via a [dotenv](https://github.com/motdotla/dotenv) `.env` file placed in `./server`. Choose your own `PRISMA_SECRET` and `APP_SECRET`

```
export PRISMA_STAGE=dev
export PRISMA_CLUSTER=local
export PRISMA_ENDPOINT=http://localhost:4466/polling/dev
export PRISMA_SECRET=anystring
export APP_SECRET=anystring
```

### 3. Create a Prisma service and database.

From the root of this project:

```
npm install -g prisma
cd server
prisma local start
prisma deploy
```

### 4. Start GraphQL Server

In the `server` directory run the following

```
npm install
npm start
```

## How To Run FrontEnd Development Server Locally

From the root directory of the project run:

```
npm install
npm start
```
