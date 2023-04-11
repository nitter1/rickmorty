import React, { Component } from "react";
import axios from "axios";
import * as S from "./styles";

const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

class App extends Component {
  state = {
    informacoes: [],
    paginaAtual: 1
  };

  componentDidMount() {
    this.PegarPersonagem(); //ativando a função
  }

  PegarPersonagem = async () => {
    const resposta = await Api.get(`?page=${this.state.paginaAtual}`);

    //Mostrar os dados da api
    console.log(resposta.data.results);


    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      informacoes: itens
    });
  };

  proximaPagina = () => {
    this.setState(
      {
        paginaAtual: this.state.paginaAtual + 1 // Incrementando a página atual
      },
      () => {
        this.PegarPersonagem(); // Atualizando a lista de personagens após mudar a página
      }
    );
  };

  paginaAnterior = () => {
    if (this.state.paginaAtual > 1) { // Verificando se a página atual é maior que 1
      this.setState(
        {
          paginaAtual: this.state.paginaAtual - 1 // Decrementando a página atual
        },
        () => {
          this.PegarPersonagem(); // Atualizando a lista de personagens após mudar a página
        }
      );
    }
  };

  render() {
    return (
      <S.Container>
        <S.Ap><h1>API Ricky and Morty</h1></S.Ap>
        {this.state.informacoes.map((item) => (
          
          <S.Artic>
          <S.Box>
            <S.Image src={item.image} alt="" />
            <S.Text>
            <S.Name> Person: {item.name} </S.Name>
            <S.Gender> Gender: {item.gender} </S.Gender>
            <S.Gender> Specie: {item.species} </S.Gender>
            <S.Status> Status: {item.status} </S.Status>
            <S.Location> Location: {item.location.name} </S.Location>
            </S.Text>
          </S.Box>
          </S.Artic>
        ))}
        <S.DivButtons>
        <S.Button className="glow-on-hover" onClick={this.paginaAnterior}>Página anterior</S.Button>
        <S.Button className="glow-on-hover" onClick={this.proximaPagina}>Próxima página</S.Button>
        </S.DivButtons>
        <S.Apf><h1>Daniel Roger Nitter © 2023</h1></S.Apf>
        <S.GlobalStyle />
      </S.Container>
    );
  }
}
export default App;
