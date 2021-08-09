# How to setup locally?

## Steps to setup login page locally

1. Comment from line no 4 to 30 in login/auth0-login.js.
2. Comment from line no 39 to 43 in login/auth0-login.js.
3. Run `npm run dev`

## Steps to build login page locally

1. Remove comment from previous steps.
2. Run `npm run build`
3. Copy dist/login/auth0-login.xxxx.css into dist/login/auth0-login.html
4. Copy dist/login/auth0-login.xxxx.js into dist/login/auth0-login.html
5. Copy dist/login/auth0-login.html into manage.auth0.com

## Steps to setup reset page locally

1. Run `npm run dev-reset`


## Steps to build reset page locally

1. Run `npm run build-reset`
2. Copy dist/reset/auth0-login.xxxx.css into dist/reset/auth0-reset.html
3. Copy dist/reset/auth0-login.xxxx.js into dist/reset/auth0-reset.html
4. Find and replace "{{password_complexity_options}}" to {{password_complexity_options}} in dist/reset/auth0-reset.html
5. Copy dist/reset/auth0-reset.html into manage.auth0.com