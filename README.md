# javascript-test-api-herokuapp

This repository contains the API tests of the [restful-booker.herokuapp.com](https://restful-booker.herokuapp.com)


## Install

1) Clone this repository
2) give the `npm install` command in the root folder of this project.
3) rename the `.env.example` file to `.env`.
4) edit the "username" and "password" lines in .env file. Use the [api docs](https://restful-booker.herokuapp.com/apidoc/index.html#api-Auth-CreateToken) for reference.


## Scripts

After the install, you can run the following scripts...

### running tests

`npm run test`


### generate allure report

`npm run allure:generate`

then...

`npm run allure:open`


### running linter

`npm run format-prettier`


## Developer Notes

### Commit Message Style

The commits in this repository formatted according the standards of the Angular Commit Message Guidelines.

[https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)


## Links

[https://restful-booker.herokuapp.com/apidoc/index.html](https://restful-booker.herokuapp.com/apidoc/index.html)
