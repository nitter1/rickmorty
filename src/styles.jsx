import styled, {
    createGlobalStyle,
  } from "styled-components";
  
  export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    background: rgb(39, 43, 51);
  }
  
  `;
  
  export const Ap = styled.div`
    h1 {
      color: white;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }
  `;
  
  export const Apf = styled.footer`
    h1 {
      color: white;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }
  `;
  
  export const Container = styled.main`
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    align-items: stretch;  
`;

    export const Artic = styled.article`
    width: 65%;
    height: 400px;
    display: flex;
    overflow: hidden;
    background: rgba(60, 62, 68, 0.5);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    text-align: center;
    align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;

  export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
  `;
  
  export const Image = styled.img`
    width: 20vw;
    height: 50vh;
    background-size: cover;
    border-radius: 2rem;
  `;
  
  export const Name = styled.h2`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
  `;
  
  export const Gender = styled.h4`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    margin: 5px;
  `;
  
  export const Status = styled.h4`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    margin: 5px;
  `;
  
  export const Location = styled.h4`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    color: white;
    margin: 5px;
  `;
  
  export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    color: white;
    padding-left: 5rem;
    margin-left: 5rem;
    text-align: left;
  `;
  
  export const Button =styled.button`
  `

  export const DivButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  `