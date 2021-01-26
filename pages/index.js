import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Imersão-React-Alura</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Testando</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (e) {
                  setName(e.target.value);
                }}
                placeholder="Informe seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Testando</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da
              indústria tipográfica e de impressos, e vem sendo utilizado
              desde o século XVI, quando um impressor desconhecido pegou
              uma bandeja de tipos e os embaralhou para fazer um livro de
              modelos de tipos.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ManoelEduardo" />
    </QuizBackground>

  );
}
