import React, { useEffect, useRef, useState } from 'react';

function Graphic() {
  const containerRef = useRef(null);
  const [graphicVisible, setgraphicVisible] = useState(false);

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

    function showGraphic() {

      setgraphicVisible(true);
    }

    function handleScroll() {
      if (isVisible(container) && !graphicVisible) {
        showGraphic();
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [graphicVisible]);
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
        <div className={`graphic__main ${graphicVisible ? 'active' : ''}`} ref={containerRef}>
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
