# tax-calculation

# Tax Calculator

Welcome to the Tax Calculator project! This is a React/TypeScript application that calculates taxes based on user input for salary and year. The application fetches tax data from an API and provides users with calculated tax amounts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)



## Getting Started

### Prerequisites

To run this project, you'll need the following:
- Node.js and npm (Node Package Manager) installed on your system.



### Installation

1. Clone this repository to your local machine using:
2. Navigate to the project directory:
3. Install the required dependencies using npm:



## Usage

Run Docker Image:
1. Pull Docker image required for this project
2. Run Docker
3. Open [Localhost:5000](http://localhost:5000/tax-calculator/tax-year/2020) to make sure Docker Image is running.

Use Tax Calculator:
1. Run the application using "npm start".
2. Open your browser and navigate to `http://localhost:3000` to access the Tax Calculator.
3. Enter the desired salary and year, then click the "CALCULATE NOW" button to see the calculated tax amount.

Test with Jest:
- Use "npm test -- --coverage"
- Option2: use "npm test"



## Features

- Calculate tax based on user-provided salary and year.
- Display appropriate error messages for invalid inputs.
- Fetch tax data from an API for the specified year.
- Utilize a tax bracket system to calculate accurate tax amounts.
- UI components designed using React and TypeScript.
- Use of proper formatting for currency and number display.

Technical Features:
- Jest testing for 5 scenarios. covering 85% of the code.


Extra libraries used for this project: 
 - [Mocking REST API](https://mswjs.io/docs/getting-started/mocks/rest-api) : 
this library was used for testing async API fetch.


## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.



## License

This project is created for Points.com as a sample project.
Created by Jenna (Faraneh) Javadinejad

