import React, { useEffect, useRef, useState } from 'react';

function Case() {

  const containerRef = useRef(null);

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    const container = containerRef.current;
    const cases = container.querySelectorAll('.case__item');

    function showCase(index) {
      setTimeout(() => {
        cases[index].style.opacity = 1;
      }, index * (Math.floor(Math.random() * 1000) + 500));
    }

    function handleScroll() {
      cases.forEach((caseItem, index) => {
        if (isElementInViewport(caseItem)) {
          showCase(index);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="case wrapper" id="case">
      <h2 className="second__title case__title">Успешные кейсы</h2>
      <p className="case__descr strong__text">Мы&nbsp;запустили несколько прибыльных продуктов, которые стали лидерами на&nbsp;рынке</p>
      <div className="case__container" ref={containerRef}>
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
