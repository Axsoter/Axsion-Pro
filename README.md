# Axsion Pro
**A**ll a**X**soter **S**tuff **I**n **ON**e Pro (except gamepanel)

Our own website & billing system.

## Installation instructions
Install Node.js (or similar) and **npm** (npm required, everything else is NOT TESTED, AND NOT SUPPORTED)

This project uses [Auth.js](https://authjs.dev/) for authenticaion, and it needs a few things before it can work properly.

Run `$ ./tools/envgen` on your terminal to copy the .env.template file into the .env file and autogenerate the Auth.js crypto secrets for it to work.
To authenticate with, for example Discord, you also need Discord Oauth2 credentials, so for that, check out the [Auth.js docs](https://authjs.dev/getting-started/authentication/oauth).

You will also need an MySQL / MariaDB server, for more information on how to setup that to work with this project, see [here](https://www.prisma.io/docs/orm/overview/databases/mysql#base-url-and-path).

After you have setup that once, you don't have to do that again.

Run `npm install` and run
- `npm run dev` to test
OR
- `npm run build` & `npm run start` for production

## License
This project is under the AxPAL License, [see license file](/LICENSE.md)
