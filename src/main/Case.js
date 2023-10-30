import React from 'react';

function Case() {
  return (
    <div className="case wrapper">
      <h2 className="second__title case__title">Успешные кейсы</h2>
      <p className="case__descr">Мы&nbsp;запустили несколько прибыльных продуктов, которые стали лидерами на&nbsp;рынке</p>
      <div className="case__container">
        <div className="case__item">
          <img src="img/case1.svg" className="case__img" alt="" />
          <span className="case__item-title strong__text">/ AdProfex</span>
          <p className="case__item-descr">
            Рекламная сеть с&nbsp;объёмом более 3&nbsp;млн&nbsp;рекламных кликов в&nbsp;сутки в&nbsp;таких регионах,
            как&nbsp;Россия, СНГ, Азия и&nbsp;Европа
          </p>
        </div>
        <div className="case__item">
          <img src="img/case2.svg" className="case__img" alt="" />
          <span className="case__item-title strong__text">/ CPA платформа (под&nbsp;NDA)</span>
          <p className="case__item-descr">
            Мультивертикальная CPA-платформа в&nbsp;нишах: нутра, новостная витрина
          </p>
        </div>
        <div className="case__item">
          <img src="img/case3.svg" className="case__img" alt="" />
          <span className="case__item-title strong__text">/ 7&nbsp;медиабаинговых команд</span>
          <p className="case__item-descr">
            Сильнейшая медиабаинговая группа команд, работающая с&nbsp;вертикалями: нутра, товарка, адалт, гемблинг,
            дейтинг, свипстейки
          </p>
        </div>
      </div>
    </div>
  );
}

export default Case;
