import React from 'react';

import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const Home = () => {
  return (
    <div>
      <Header />

      <main className="home-main">
        <div className="home">
          <h1>SORVETE ARTESANAL</h1>
        </div>
      </main>

      <section className="home-sabores">
        <picture>
          <img
            src="./assets/banner-sabores.jpg"
            alt="Sorvete de diversos sabores"
          />
        </picture>
        <div className="home-textos">
          <h2>NOSSOS SABORES</h2>
          <p>
            <strong>Novos e deliciosos!</strong>
          </p>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de frutas e
            sem nenhum conservante! Também temos opções sem lactose e sem
            açúcar. Venha conhecer e perceber que tem como o sorvete ser
            delicioso e saudável ao mesmo tempo!
          </p>
        </div>
      </section>

      <section className="home-eventos">
        <div className="home-textos">
          <h2>NOSSOS EVENTOS</h2>
          <p>
            <strong>Delicias com sorvete!</strong>
          </p>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os
            melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo
            aqui com a gente.
          </p>
        </div>
        <picture>
          <img src="./assets/eventos-image.jpg" alt="Sorvete para enventos" />
        </picture>
      </section>

      <section className="home-sobre">
        <picture>
          <img src="./assets/sobre-image.jpg" alt="Amigos tomando sorvete" />
        </picture>
        <div className="home-textos">
          <h2>SOBRE NÓS</h2>
          <p>
            <strong>Alegria em cada casquinha!</strong>
          </p>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
            há anos no mercado produzindo o que tem de melhor para o nosso
            cliente e você não pode ficar de fora dessa. Venha nos fazer uma
            visita e aproveite o melhor atendimento e o melhor sorvete da
            cidade.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
