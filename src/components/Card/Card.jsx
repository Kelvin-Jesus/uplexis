import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    let componentData = {
        title: props.cardTitle,
        description: props.cardDescription,
        price: props.cardPrice
    }

    return (
        <article className="card">

            <div className="card__content">
                <div className="card__icon">
                    {props?.cardIcon}
                </div>
                <h3 className="card__title">{props?.cardTitle}</h3>
                <p className="card__description">
                    {props?.cardDescription}
                </p>
            </div>

            <footer className="card__footer">
                <div className="card__price">R$ {props?.cardPrice}</div>
                <Link 
                    className="card__btn" 
                    to={"/detalhes"}
                    state={{ componentData }}
                >Saiba mais</Link>
            </footer>
            
        </article>
    );
}

export default Card;
