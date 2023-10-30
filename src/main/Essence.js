import React from 'react';

function Essence() {
    return (
        <div className="wrapper essence">
            <h2 className="essence__title second__title">Суть предложения</h2>
            <div className="essence__scroll">
                <div className="essence__container">
                    <div className="essence__item">
                        <p className="essence__item--title">/01.</p>
                        <p className="essence__item--descr">Вы&nbsp;оставляете свои контактные данные и&nbsp;информацию о&nbsp;проекте
                            или&nbsp;своём
                            опыте</p>
                    </div>
                    <div className="essence__item">
                        <p className="essence__item--title">/02.</p>
                        <p className="essence__item--descr">Мы&nbsp;проводим с&nbsp;вами интервью-знакомство</p>
                    </div>
                    <div className="essence__item">
                        <p className="essence__item--title">/03.</p>
                        <p className="essence__item--descr">Мы&nbsp;подготавливаем условия сотрудничества для&nbsp;обсуждения</p>
                    </div>
                    <div className="essence__item">
                        <p className="essence__item--title">/04.</p>
                        <p className="essence__item--descr">Совместно запускаем новый бизнес</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Essence;
