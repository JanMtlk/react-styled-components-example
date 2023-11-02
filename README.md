# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### What are Styled-Components?
`Styled-Components`, a  library for styling React components using tagged template literals.
### Installation
To use Styled-Components, you'll need to install it:
```zsh
npm install styled-components
```
### Basic Usage
Example:
```jsx
import styled from 'styled-components'; 
const Button = styled.button`
		background: ${props => props.primary ? 'blue' : 'white'};   
		color: ${props => props.primary ? 'white' : 'black'};
		padding: 10px 20px;   border: 2px solid blue; `;  
// Usage 
<Button primary>Primary Button</Button> 
<Button>Secondary Button</Button>
```

## Advanced Styling
Learn more advanced styling techniques using Styled-Components.
### Global Styling
Example:
```jsx
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`   body {     font-family: 'Arial', sans-serif;   } ` // Usage <GlobalStyle />

```

### Theming
Example:
```jsx
import { ThemeProvider } from "styled-components"
const theme = { primaryColor: "blue", secondaryColor: "green" }
// Usage 
<ThemeProvider theme={theme}>  
	{/* Styled-Components components here */} 
</ThemeProvider>

```

## Conditional Styling
how to apply conditional styling in Styled-Components.
Example:
```jsx
const Button = styled.button`   background: ${props => props.primary ? 'blue' : 'white'};   color: ${props => props.primary ? 'white' : 'black'};   padding: 10px 20px;   border: 2px solid ${props => props.primary ? 'blue' : 'black'}; `;  
// Usage
<Button primary>Primary Button</Button> <Button>Secondary Button</Button>
```