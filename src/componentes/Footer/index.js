import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <picture>
          <img src="../assets/logo.png" alt="" />
        </picture>
        <div className="sobre-footer">
          <div className="ech">
            <h2>ENDEREÇO</h2>
            <p>Av. Bernardino de Campos, 98</p>
            <p>São Paulo, SP 12345-678</p>
          </div>

          <div className="ech">
            <h2>CONTATO</h2>
            <p>info@mousite.com</p>
            <p>Tel: (21) 98765-4321</p>
          </div>

          <div className="ech">
            <h2>HORÁRIOS</h2>
            <p>ABERTO TODOS OS DIAS</p>
            <p>10:00 - 22:00</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2022 - Gelateria - Todos os direitos reservados - Code by <a href="https://dithan.github.io">Thiago Rocha</a> </p>
      </div>

    </footer>
  );
};

export default Footer;
