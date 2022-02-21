import React from 'react';

const CardsOrder = (props) => {

    const { filterByPrice } = props.filter
    const { filterByDate } = props.filter

    return (
        <section className="cards-order">
            <p className="cards-order__title">ORDERNAR</p>
            <select name="" id="" className="cards-order__select">
                <option 
                    onClick={() => {props.handleClick('price');filterByPrice()}} 
                    selected={props.order === 'price' ? true : false} 
                    value="price"
                >Preço</option>
                <option 
                    onClick={() => {props.handleClick('launch');filterByDate()}} 
                    selected={props.order === 'launch' ? true : false} 
                    value="launch"
                >Lançamento</option>
            </select>
        </section>
    );
}

export default CardsOrder;
