import React from 'react';

function Graphic() {
  return (
    <div className="wrapper graphic">
      <div className="graphic__text">
      <h1 className="graphic__title">
      Даём <span>500 000&nbsp;$<br /></span> инвестиций
    </h1>
        <p className="strong__text">
         на&nbsp;проекты в&nbsp;сфере <br /> Affiliate-маркетинга и&nbsp;АdTech
        </p>
        <button className="graphic__button">
          Есть&nbsp;идея
          <img src="img/graphic.svg" alt="" />
        </button>
      </div>
      <div className="graphic__block">
        <div className="graphic__back"></div>
        <div className="graphic__main">
          <div className="graphic__line graphic__line-grid1"></div>
          <div className="graphic__line graphic__line-grid2"></div>
          <div className="graphic__line graphic__line-grid3"></div>
          <div className="graphic__item graphic__item--block1">
            <img src="img/graphic-block1.svg" alt="" />
          </div>
          <div className="graphic__item graphic__item--block2">
            <img src="img/graphic-block2.svg" alt="" />
          </div>
          <div className="graphic__item graphic__item--block3">
            <img src="img/graphic-block3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
