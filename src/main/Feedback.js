import React from 'react';

function Feedback() {
  return (
    <div className="feedback">
      <span className="animation-line"></span>
      <form action="" className="feedback__form">
        <div className="feedback__title">
          <h2 className="second__title">Расскажи о&nbsp;себе и&nbsp;своей идее</h2>
          <div className="feedback__img"></div>
        </div>
        <div className="inputs__block">
          <label htmlFor="" className="feedback__form-label">
            Имя
            <input type="text" className="feedback__form-input" />
          </label>
          <label htmlFor="" className="feedback__form-label">
            Email
            <input type="text" className="feedback__form-input" />
          </label>
          <label htmlFor="" className="feedback__form-label">
            Мессенджер
            <select name="" className="feedback__form-input" id="">
              <option value="Телеграм">Телеграм</option>
            </select>
          </label>
          <label htmlFor="" className="feedback__form-label">
            Никнейм мессенджера
            <input type="text" className="feedback__form-input" />
          </label>
        </div>
        <div className="feedback__other">
          <label htmlFor="" className="feedback__textarea-label">
            Идея проекта
            <textarea name="" id="" cols="30" rows="4" className="feedback__textarea"></textarea>
          </label>
          <div className="feedback__form-bottom">
            <label className="feedback__form-checkbox">
              <span className="feedback__form-span">
                <img src="img/feedback-cross.svg" alt="" />
              </span>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <p>
                Я даю своё согласие на обработку персональных данных в соответствии с&nbsp;полным текстом
                <a href="">Пользовательского соглашения</a> и <a href="">Политики конфиденциальности</a>
              </p>
            </label>
            <button type="submit" className="feedback__form-button">Вперёд к&nbsp;успеху!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
