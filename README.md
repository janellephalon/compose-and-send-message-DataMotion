# Compose and Send a Secure Message in Minutes with DataMotion's Secure Message Center APIs

## Description
This application provides a secure way for users to send messages using DataMotion's API. The form we've designed prompts the user for their email, the recipient's email, and the message content. Once the form is submitted, a series of JavaScript functions retrieve an access token from DataMotion and use it to send the message securely. This project demonstrates the capabilities of DataMotion's API and how it can be integrated into a web-based application for secure communication.

## Table of Contents 
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credentials](#credentials)
  - [Code Explanation](#code-explanation)
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
1. Add your DataMotion credentials to the JavaScript file. Refer to the [credentials](#credentials) section for more details.
2. Open the HTML file in your browser.
3. Enter your email, the recipient's email, and your message into the appropriate fields, then click the Send button.

## Credentials
To ensure secure messaging via the DataMotion API, specific credentials are needed, which differ based on your usage status - trial or customer. 

- **Trial Users**: You should utilize the sandbox API at `https://api.datamotion.com/SMC/Messaging/v3-Sandbox`. Your credentials for this sandbox API align with your trial Customer Self Service credentials.

- **Customers**: Once you transition from trial to a full customer, your API changes to `https://api.datamotion.com/SMC/Messaging/v3`. For this, your Secure Message Portal (SSL) credentials serve as your authentication.

By correctly using these credentials, you'll effectively secure your communication and ensure optimal functionality of this application.

## Code Explanation
Our application uses JavaScript's Fetch API to interact with DataMotion's API. The form submission event triggers a function which retrieves an access token from DataMotion. This token is then used in a second function to send the user's message securely.

## Contributors
- [Janelle Phalon](https://github.com/janellephalon) <br>
  Developer Advocate at DataMotion

