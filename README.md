# Senior frontend engineer test

When you have finished the test, change the repository remote url to a public repository you own, push your code to it and communicate this repository URL back to us.

## Setup

- Install pnpm

```bash
npm install -g pnpm
```

- Install dependencies

```bash
pnpm i
```

- Run the dev script

```bash
pnpm dev
```

This will run the API, client and Sdk in dev mode:

- The NodeJS Fastify API will be running on `http://localhost:4000`,
- The React client will be running on `http://localhost:5173`

You should not have to change the API or the Sdk to complete this test.

## Tasks

### Expected output

You are tasked to complete the UI defined in these [Figma specs](https://www.figma.com/file/eAfSBnVqQbGN7coOE2w9x9/Front-end-test?node-id=0%3A1&t=5I1j7EAMeEyeAUyh-1)

We expect you to deliver:

- [x] A basic "Welcome to PayFit" landing page
- [x] A companies listing page containing grid of companies with search filtering
  - Extra mile:
    - [x] Responsive behavior
    - [ ] Pagination
- [x] A company creation page
  - Extra mile:
    - [ ] Validation handling
    - [ ] Loading state

### Tech stack

#### UI

We expect the UI to be built using the styling library (`styled-components`) and the routing library (`react-router-dom`) provided in the client app.

#### HTTP

The Sdk package contains a typed `api` function wrapper of fetch (`packages/sdk/src/api/api.ts`). In it, we decided to `throw` the response if it's not `ok`. Feel free to change this design decision if it's doesn't suit you.
We also provided you with the required http functions for you to complete these tasks in the client app (`apps/client/src/app/shared/http.ts`)

#### Data models

The API documentation is available on `http://localhost:4000/docs/static/index.html`

The data is persisted in the a local SQlite db so that the companies you create are persisted and will be usable when we will debrief your work together.
If, for some reason you end up having data related issues, you can:

- Run the `seed` script in the api app. This will remove any existing data from the database and re-seed it with 4 company & 4 sectors.
- You can also use the `studio` script in the api app. This will launch `Prisma` studio application on `http://localhost:5555` and enable you to easily make data related changes.

#### Validation rules

The companies banner are saved in DB as an URL of an image. Feel free to use the same service (https://picsum.photos) as the one used in the api `seed` script.
Finally, the following validation rules are enforced the API:

- The companies name must be at least 2 characters long
- The companies description must be at least 10 characters long
- The companies banner must be a valid URL
