import React, { useState, useEffect } from 'react';

function We() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper we">
      <h2 className="we__title second__title">Кто&nbsp;мы</h2>
      <div className="we__img">
        <img src="img/layout1.png" alt=""
          className="we__layout1"
          style={{ top: scrollPosition * 0.015 + '%' }} />
        <img src="img/layout2.png"  className="we__layout2" alt="" />
        <img src="img/layout3.png" alt=""
          className="we__layout3"
          style={{ top: -scrollPosition * 0.015 + 40 + '%' }} />
      </div>
      <div className="we__descr">
        <p className="strong__text">Венчурная студия ProfitLab —</p>
        <p className="we__descr--main">компания, которая даёт возможности для&nbsp;роста и&nbsp;развития стартапов,
          разрабатывает и&nbsp;обеспечивает их&nbsp;целым рядом сервисов и&nbsp;необходимых ресурсов</p>
      </div>
    </div>
  );
}

export default We;
