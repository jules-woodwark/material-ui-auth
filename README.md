# Material UI Auth

A simple React application with authentication, built with TypeScript, Create React App, Material UI, Formik & Firebase.

[Go to Live Application](https://jules-woodwark.github.io/material-ui-auth/)

## Index

  - [Project Overview](#project-overview)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Further Development](#further-development)

## Project Overview

I created this project to get experience building with TypeScript, Material UI & Formik. This application has a protected route, "/profile", which can only be accessed if a user is authenticated. A user has to sign-up/login with valid credentials (schema built with Yup), to then be redirected to "/profile". Once validated, the user can update there account details.

## Installation

View the application live [here](https://jules-woodwark.github.io/material-ui-auth/)

To clone the repo:

    $ git clone git@github.com:jules-woodwark/material-ui-auth.git
    $ cd material-ui-auth
    $ npm install

## Usage

Access the application root:

    $ cd material-ui-auth

Start the server (default access via localhost:3000):

    $ npm start

Test the application:

    $ npm test

## Further Development

- Add more unit tests
- Reset password via email functionality
- Add more authentication options
