import React, { useState } from 'react';

function Feedback() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messenger: '',
    messengerUsername: '',
    idea: '',
    agreeToTerms: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      setSubmitted(true);

      // Отправка данных на сервер
      fetch('http://localhost:3001/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }
  const handleInputChange = (e) => {

    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const handleAgreeChange = (e) => {


    setFormData((prevFormData) => ({
      ...prevFormData,
      agreeToTerms: !(prevFormData.agreeToTerms),
    }));
  }

  const closeThanks = () => {
    setSubmitted(false);
  };
  return (
    <>
      <div id='feedback' className='feedback__container'>
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
                <select name="messenger" className="feedback__form-input" id="" onChange={handleInputChange}>
                  <option value="Telegram">Telegram</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Skype">Skype</option>
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
                  <img src='../../public/img/feedback-border.svg' alt='' />
                  <p>
                    Я даю своё согласие на обработку персональных данных в соответствии с&nbsp;полным текстом
                    <a href="agreement.pdf"> Пользовательского соглашения</a> и <a href="policy.pdf">Политики конфиденциальности</a>
                  </p>
                </label>
                <button type="submit" className={(formData.agreeToTerms) ? "feedback__form-button active" : "feedback__form-button"} disabled={!formData.agreeToTerms}>Вперёд к&nbsp;успеху!</button>
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
