import React, { useEffect, useRef, useState } from 'react';

function Graphic() {

  useEffect(() => {
    // Устанавливаем таймаут на 3 секунды
    const timeoutId = setTimeout(() => {
      // После 3 секунд устанавливаем класс "active" для элемента с классом "graphic__main"
      const graphicMain = document.querySelector('.graphic__main');
      if (graphicMain) {
        graphicMain.classList.add('active');
      }
    }, 500);

    // Возвращаем функцию для очистки таймаута при размонтировании компонента
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="wrapper graphic">
      <div className="graphic__text">
        <h1 className="graphic__title">
          Даём <span>500 000&nbsp;$<br /></span> инвестиций
        </h1>
        <p className="strong__text">
          на&nbsp;проекты в&nbsp;сфере <br /> Affiliate-маркетинга и&nbsp;АdTech
        </p>
        <a href="#feedback" className="graphic__button">
          Есть&nbsp;идея
          <img src="img/graphic.svg" className='nohover' alt="" />
          <img src="img/graphic-hover.svg" className='hover' alt="" />
        </a>
      </div>
      <div className="graphic__block">
        <div className="graphic__back"></div>
        <div className="graphic__main">
          <div className="graphic__line graphic__line-grid1"></div>
          <div className="graphic__line graphic__line-grid2"></div>
          <div className="graphic__line graphic__line-grid3"></div>
          <div className='main__line'></div>
          <div className="graphic__item graphic__item--block1">
            <div className="graphic__dot"></div>
            <img src="img/graphic-block1.svg" alt="" />
          </div>
          <div className="graphic__item graphic__item--block2">
            <div className="graphic__dot"></div>
            <img src="img/graphic-block2.svg" alt="" />
          </div>
          <div className="graphic__item graphic__item--block3">
            <div className="graphic__dot"></div>
            <img src="img/graphic-block3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
