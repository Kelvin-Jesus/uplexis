import React from 'react';

import Logo from '../Logo/Logo';

const Banner = (props) => {
    return (
        <section class="banner">
            <div className="banner__content-wrapper">
                <Logo className="banner__logo" />  <span> | Histórico Empresarial</span>
                <div className="content-wrapper__description">
                    O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.
                </div>
                <div className="content-wrapper__aditional-infos">
                    <div>
                        <p className="aditional-infos__price"><span className="fs-sm">R$ </span>40,00</p>
                    </div>
                    <div>
                        <button class="aditional-infos__btn">Saiba Mais</button>
                    </div>
                </div>
            </div>
            <div className="banner__img-overlay">
                <img className="banner__bg" src={props.src} alt="Banner da Home do Site" />
            </div>
        </section>
    );
}

export default Banner;
