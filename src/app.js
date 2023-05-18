import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section id="sobre" title="Sobre">
          <div className="container">
            <h1>Bem-vindo ao meu Portfólio</h1>
            <p>Olá, meu nome é [Seu Nome]. Eu sou um(a) [Sua Profissão] e estou apaixonado(a) por [Sua Área de Atuação].</p>
            <a href="[URL do seu LinkedIn]" target="_blank" className="btn">LinkedIn</a>
          </div>
        </Section>

        <Section id="projetos" title="Projetos">
          <div className="container">
            <Project
              imgSrc="[URL do Projeto 1]"
              imgAlt="Projeto 1"
              title="Projeto 1"
              description="Descrição do Projeto 1"
            />
            <Project
              imgSrc="[URL do Projeto 2]"
              imgAlt="Projeto 2"
              title="Projeto 2"
              description="Descrição do Projeto 2"
            />
          </div>
        </Section>

        <Contact email="[Seu Email]" />
      </main>

      <footer>
        <p>&copy; 2023 Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
