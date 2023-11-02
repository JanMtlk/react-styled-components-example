import './App.css';
import styled from 'styled-components';

function App() {
  const StyledHeader = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const HeaderLink = styled.a`
    margin: 0 1em;
    color: #61dafb;
    cursor: pointer;
  `;

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
