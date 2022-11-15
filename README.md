# Mood Tracker 🙂

## Overview 🖼️

With the Mood Tracker app you can document each day in your life and set priorities you aim to fulfil regularly.

## Getting started 💻

This project contains the **React** frontend app and the **Strapi** backend. To test the app, you need to open two terminals.

### Open a terminal inside `/strapi-backend`.

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

## Contact 📨

[andrea.haider-pachtrog@fh-hagenberg.at](mailto:andrea.haider-pachtrog@fh-hagenberg.at)

[daniel.flockert@fh-hagenberg.at](mailto:daniel.flockert@fh-hagenberg.at)

[lisa.lamplmair@fh-hagenberg.at](mailto:lisa.lamplmair@fh-hagenberg.at)
