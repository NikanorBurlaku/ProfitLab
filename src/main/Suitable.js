import React, { useEffect, useRef, useState } from 'react';

function Suitable() {
  const containerRef = useRef(null);
  const [imagesVisible, setImagesVisible] = useState(false);

  function isVisible(elem) {
    if (!elem) return false;
    const docViewTop = window.scrollY;
    const docViewBottom = docViewTop + window.innerHeight;
    const elemTop = elem.offsetTop;
    const elemBottom = elemTop + elem.offsetHeight;

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  useEffect(() => {
    const container = containerRef.current;

    function showSuitable() {
      const images = container.querySelectorAll('img');

      for (let i = 0; i < images.length; i++) {
        setTimeout(() => {
          images[i].style.opacity = 1;
        }, i * (Math.floor(Math.random() * 1000) + 500));
      }
      setImagesVisible(true);
    }

    function handleScroll() {
      if (isVisible(container) && !imagesVisible) {
        showSuitable();
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imagesVisible]);

  return (
    <div className="wrapper suitable">
      <h2 className="suitable__title second__title">Кому подходит?</h2>
      <div className="suitable__container" ref={containerRef}>
        <div className="suitable__item">
          <img src="img/suitable.svg" alt="" />
          <p className="suitable__descr">
            Тем, у&nbsp;кого есть&nbsp;бизнес-идея в&nbsp;сфере affiliate-маркетинга, способная
            потенциально генерировать более 50&nbsp;000&nbsp;$ в&nbsp;месяц
          </p>
        </div>
        <div className="suitable__item">
          <img src="img/suitable.svg" alt="" />
          <p className="suitable__descr">
            Опытным медиабайерам и&nbsp;тимлидам, желающим создать своё медиабаинговое
            агентство (арбитражную команду)
          </p>
        </div>
        <div className="suitable__item">
          <img src="img/suitable.svg" alt="" />
          <p className="suitable__descr">
            Тем, кто&nbsp;имеет продуктовый и&nbsp;медиабаинговый бэкграуд и&nbsp;желание
            развиваться в&nbsp;сфере, a&nbsp;также&nbsp;нацелен на&nbsp;долгосрочные проекты
          </p>
        </div>
      </div>
    </div>
  );
}

export default Suitable;
