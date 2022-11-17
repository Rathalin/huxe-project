# Mood Tracker 🙂

## Overview 🖼️

With the Mood Tracker app you can document each day in your life and set priorities you aim to fulfill regularly.

## Getting started 💻

This project contains the **React** frontend app and the **Strapi** backend. To test the app, you need to open two terminals.

### Open a terminal inside `/strapi-backend`

1. Rename `.env.example` to `.env` (only for testing).
1. Run `npm i`.
1. Run `npm run strapi start`. This may take a while.
1. Open [localhost:1337/admin](http://localhost:1337/admin) in the browser.
1. Create your admin account.
1. Navigate to `Settings > USERS & PERMISSIONS PLUGIN > Roles > Public` and click the `Select all` checkbox for following content types:
    1. Daily-mood
    1. Emotion
    1. Satisfied-priority
    1. Strong-emotion
    1. Upload
1. Don't forget to save.

### Open a terminal inside `/react-app`

1. Run `npm i`.
1. Run `npm run start`.
1. Open [localhost:3000/](http://localhost:3000/) in the browser and have fun with the app 🫡.

### Testing

End2End testing was done with Cypress. The tests can be started by going to the `/react-app` directory and using the command: `npx cypress open`.

## Additional notes 📑

Login and registration work but for simplicity the **Public api** is used. Also, the data structure currently does not support a differentiation between users.

## Contact 📨

| Name                   | FH-Email                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------- |
| Andrea Haider-Pachtrog | [S2110629009@students.fh-hagenberg.at](mailto:S2110629009@students.fh-hagenberg.at) |
| Daniel Flockert        | [S2110629004@students.fh-hagenberg.at](mailto:S2110629004@students.fh-hagenberg.at) |
| Lisa Lamplmair         | [S2110629010@students.fh-hagenberg.at](mailto:S2110629010@students.fh-hagenberg.at) |
