import React, { useState } from 'react';
import Thanks from './Thanks';

function Feedback() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messenger: 'Телеграм',
    messengerUsername: '',
    idea: '',
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      setSubmitted(true);
      console.log(formData);
    }
    // Отправка данных на сервер
    // fetch('http://localhost:3000/submitForm', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // Дополнительные действия после отправки формы
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Обработка ошибки
    //   });
  };
  const handleInputChange = (e) => {

    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Update the specific property in the state
    }));
  }
  const handleAgreeChange = (e) => {


    setFormData((prevFormData) => ({
      ...prevFormData,
      agreeToTerms: !(prevFormData.agreeToTerms), // Update the specific property in the state
    }));
  }

  const closeThanks = () => {
    setSubmitted(false); // Set submitted to false to close the "Thanks" component
  };
  return (
    <>
      <div className='feedback__container'>
        <div className="feedback">
          <form onSubmit={handleSubmit} className="feedback__form">
            <div className="feedback__title">
              <h2 className="second__title">Расскажи о&nbsp;себе и&nbsp;своей идее</h2>
              <div className="feedback__img"></div>
            </div>
            <div className="inputs__block">
              <label htmlFor="" className="feedback__form-label">
                Имя
                <input type="text" className="feedback__form-input" name="name" value={formData.name} onChange={handleInputChange} required />
              </label>
              <label htmlFor="" className="feedback__form-label">
                Email
                <input type="email" className="feedback__form-input" name="email" value={formData.email} onChange={handleInputChange} required />
              </label>
              <label htmlFor="" className="feedback__form-label">
                Мессенджер
                <select name="" className="feedback__form-input" id="">
                  <option value="Телеграм">Телеграм</option>
                </select>
              </label>
              <label htmlFor="" className="feedback__form-label">
                Никнейм мессенджера
                <input type="text" className="feedback__form-input" name="messengerUsername" value={formData.messengerUsername} onChange={handleInputChange} required />
              </label>
            </div>
            <div className="feedback__other">
              <label htmlFor="" className="feedback__textarea-label">
                Идея проекта
                <textarea name="idea" id="" cols="30" rows="4" className="feedback__textarea" value={formData.idea} onChange={handleInputChange} required></textarea>
              </label>
              <div className="feedback__form-bottom">
                <label className="feedback__form-checkbox">
                  <span name="agreeToTerms" onClick={handleAgreeChange}
                    className={(formData.agreeToTerms) ? 'feedback__form-span active' : 'feedback__form-span'}
                  >
                    <img src="img/feedback-cross.svg" alt="" />
                  </span>
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <p>
                    Я даю своё согласие на обработку персональных данных в соответствии с&nbsp;полным текстом
                    <a href=""> Пользовательского соглашения</a> и <a href="">Политики конфиденциальности</a>
                  </p>
                </label>
                <button type="submit" className="feedback__form-button">Вперёд к&nbsp;успеху!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {submitted && (
        <div className="thanks active" onClick={closeThanks}>
          <div className="thanks__container">
            <img src="img/suitable.svg" alt=""></img>
            <p className="thanks__title">Спасибо!</p>
            <p>Мы свяжемся с тобой в скором времени</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Feedback;
