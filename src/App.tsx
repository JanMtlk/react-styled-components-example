import { styled } from '@mui/system';
import './App.css';
// import styled from 'styled-components';
import { Link } from '@mui/material';


function App() {
  // //this is from styled components package
  // const StyledHeader = styled.header`
  //   background-color: #282c34;
  //   min-height: 10vh;
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: center;
  //   font-size: calc(10px + 2vmin);
  //   color: white;
  // `;
  // const HeaderLink = styled.a`
  //   margin: 0 1em;
  //   color: #61dafb;
  //   cursor: pointer;
  // `;



  // when using MUI components you can use the MUI styled() or its sx prop

const StyledHeader = styled("header")({
  background: 'linear-gradient(45deg, #773040 30%, #D24A01 90%)',
  color: 'white',
  padding: '3vh 0',
  cursor: 'default',
});

const HeaderLink = styled(Link)({
  color: '#FFFFFF',
  cursor: 'pointer',
  margin: '0.2vh 1em',
  fontWeight: 'bolder',
  fontSize: '1.5rem',
});

  

  return (
    <div className="App">
      <StyledHeader>
        <HeaderLink>Home</HeaderLink>
        <HeaderLink>About</HeaderLink>
        <HeaderLink>Docs</HeaderLink>
        <HeaderLink>Sign up</HeaderLink>
      </StyledHeader>
    </div>
  );
}

export default App;
