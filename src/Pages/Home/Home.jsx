import React, { useState } from 'react';
import cardData from '../../extras/cardData';
import cardFilters from '../../extras/cardFilters';

import FilterList from '../../components/FilterList/FilterList';
import CardsOrder from '../../components/CardsOrder/CardsOrder';
import Card from '../../components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

    const [ orderCards, setOrderCards ] = useState('launch');
    const [ cardsData, setCardData ] = useState(cardData);
    const [ filterCardsList, setFilterCardsList ] = useState(cardFilters)

    const changeOrder = (value) => {
        setOrderCards(value)
    }

    const filterByPrice = () => {
        setCardData(cardsData.sort((a, b) => {
            return a.price > b.price
        }))
    }

    const filterByDate = () => {
        setCardData((cardsData.sort((a, b) => {
            return a.launchDate > b.launchDate
        })))
    }

    const filterCardsByCategory = filterBy => {
        setCardData(cardData.filter(card => {
            if (filterBy === 'todos') return true;
            return card.category === filterBy
        }))

        console.log(filterBy, cardsData)

        setFilterCardsList(filterCardsList.map(cardList => {
            cardList.active = cardList.category === filterBy ? true : false;
            return cardList;
        }))

    }

    return (
        <main className="main-section">
            <FilterList 
                cardFilters={filterCardsList}
                filterCardsByCategory={filterCardsByCategory}
            ></FilterList>
            <CardsOrder 
                order={orderCards} 
                filter={{filterByPrice, filterByDate}} 
                handleClick={changeOrder}
            ></CardsOrder>
            <section className="cards-grid">
                
                { cardsData.length 
                    ? cardsData.map((card, index) => {
                            return (
                                <Card 
                                    key={card.id + index + card.title} 
                                    cardTitle={card.title}
                                    cardDescription={card.description}
                                    cardIcon={<FontAwesomeIcon icon={card.icon} />}
                                    cardPrice={card.price}
                                >
                                </Card>
                            )
                        }) 
                    : (<p>Nenhum resultado</p>)
                }
                
            </section>
        </main>
    );
}

export default Home;
