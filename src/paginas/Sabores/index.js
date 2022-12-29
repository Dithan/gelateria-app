import React from 'react';

import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';

const Sabores = () => {
  return (
    <div>
      <Header />
      <main className="sabores-main">
        <div className="sabores">
          <h1>NOSSOS SABORES</h1>
        </div>
      </main>

      <section className='sabores-textos'>
        <h2>SABORES DE SORVETES</h2>
        <div className="cards">
          <div className="card">
            <picture><img src="./assets/sabor-oreo.png" alt="Sorvete Oreo" /></picture>
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sabor-pistache.png" alt="Sorvete de Pistache" /></picture>
            <h3>Sorvete de Pistache</h3>
            <p>Cremoso sorvete sabor Pistache com pedacinhos de semente.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sabor-cookies-avela.png" alt="Sorvete Cookies $ Avelã" /></picture>
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sorbet-kiwi.png" alt="Sorvete de Kiwi" /></picture>
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e resfrescante sorvete sabor kiwi. Rico em Vitamina C.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sorbet-morango.png" alt="Sorvete de Morango" /></picture>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>

          <div className="card">
            <picture><img src="./assets/sorbet-limao.png" alt="Sorvete de Limão Siciliano" /></picture>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Sabores;
