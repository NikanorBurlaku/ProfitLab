import React from 'react';

function Give() {
  return (
    <div className="give wrapper" id='give'>
      <h2 className="give__title second__title">Что даем?</h2>
      <div className="give__container">
        <div className="give__item">
          <p className="give__item-title">до<span className="give__item--count">50</span><span className="give__item--symbol">%</span></p>
          <p className="give__item-descr">
            Опцион, процент от&nbsp;прибыли или&nbsp;долю в&nbsp;новом бизнесе (как&nbsp;правило,
            это&nbsp;10–30% в&nbsp;продуктовых бизнесах и&nbsp;25–50% в&nbsp;медиабаинговых агенствах)
          </p>
        </div>
        <div className="give__item">
          <p className="give__item-title">до<span className="give__item--count">500K</span><span className="give__item--symbol"> $</span></p>
          <p className="give__item-descr">Бюджет на&nbsp;запуск проекта&nbsp;— от&nbsp;50&nbsp;до&nbsp;500&nbsp;тысяч долларов</p>
        </div>
        <div className="give__item">
          <p className="give__item-title">рутина</p>
          <p className="give__item-descr">Отсутствие рутины в&nbsp;решении операционных вопросов: финансы, юридическая
            часть, разработка</p>
        </div>
        <div className="give__item">
          <p className="give__item-title">Help</p>
          <p className="give__item-descr">Экспертная помощь: медиабаинг, операционный менеджмент, стратегическое
            управление</p>
        </div>
      </div>
    </div>
  );
}

export default Give;
