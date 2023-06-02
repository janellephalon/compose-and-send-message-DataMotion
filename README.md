# Compose and Send a Secure Message <br> with DataMotion v3 APIs

## Description
This application provides a secure way for users to send messages using DataMotion's API. The form we've designed prompts the user for their email, the recipient's email, and the message content. Once the form is submitted, a series of JavaScript functions retrieve an access token from DataMotion and use it to send the message securely. This project demonstrates the capabilities of DataMotion's API and how it can be integrated into a web-based application for secure communication.

## Table of Contents 
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Code Explanation](#code-explanation)
  - [Demo](#demo)
  - [Contributors](#contributors)

## User Story
```
AS A user who values privacy and secure communication,
I WANT to send messages via a secure form,
SO THAT my sensitive information is protected during transmission.
```

## Acceptance Criteria 
```
GIVEN a secure message form
WHEN I load the form
THEN I am presented with fields to enter my email, the recipient's email, and my message
WHEN I fill in the form and click the Send button
THEN my information is sent to a function which retrieves an access token from DataMotion
WHEN the access token is successfully retrieved
THEN a second function is triggered to send my message using DataMotion's API
WHEN my message is successfully sent
THEN I am presented with a confirmation alert and the form is reset
WHEN there is an error at any point in this process
THEN I am presented with an alert detailing the error that occurred
```

## Installation
To run the project locally, clone this repository and navigate into the project folder. Add your credentials to the JavaScript file and open the HTML file in your browser.

## Usage
Enter your email, the recipient's email, and your message into the appropriate fields, then click the Send button.

## Code Explanation
Our application uses JavaScript's Fetch API to interact with DataMotion's API. The form submission event triggers a function which retrieves an access token from DataMotion. This token is then used in a second function to send the user's message securely.

## Contributors
- [Janelle Phalon](https://github.com/janellephalon) <br>
  Developer Advocate at DataMotion

