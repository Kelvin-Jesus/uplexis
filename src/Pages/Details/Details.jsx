import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TwoImagesBanner from '../../components/Banner/TwoImagesBanner';


const Details = () => {

    let location = useLocation()
    const { price, description } = location.state.componentData
    console.log(price, description)

    return (
        <main className="main-section">
            <section className="details">
                <Link className="details__back" to="/">&#60; Histórico Empresarial</Link>
                <TwoImagesBanner></TwoImagesBanner>
                <div className="details__content">
                    <p className="details__description">
                        {description}
                    </p>
                    <div className="details__aditional-wrapper">
                        <span className="details__price">R$ <span className="price">{price}</span></span>
                        <button className="details__btn aditional-infos__btn">Habilitar</button>
                    </div>
                </div>
                
            </section>
        </main>
    );
}

export default Details;
