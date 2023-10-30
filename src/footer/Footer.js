import React from 'react';

function Footer() {
  return (
    <footer className="wrapper">
      <span className="footer__logo">
        <img src="img/footer.svg" alt="" />
      </span>

      <a href="mailto:info@profitlab.online" className="footer__mail">
        <img src="img/footer-mail.svg" alt="" />
        info@profitlab.online
      </a>

      <p className="footer__links">
        <a href="">Пользовательское соглашение</a>
        <a href="">Политика конфиденциальности</a>
      </p>
    </footer>
  );
}

export default Footer;
