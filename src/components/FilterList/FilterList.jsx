import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faSuitcase, faUniversity, faTree, faGavel, faBan, faGlobeAmericas, faGem, faMale, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const FilterList = (props) => {
    return (
        <section className="filter-cards">
            <ul className="filter-cards__list">
                {props.cardFilters.map((item, index) => {

                    let isActive = item.active ? 'is-active' : ''

                    return (
                        <li 
                            key={index + item.id}
                            className={
                                `filter-cards__list-item ${isActive}`
                            }
                            data-category={item.category}
                            onClick={() => props.filterCardsByCategory(item.category)}
                        >
                            <FontAwesomeIcon icon={item.icon} /> {item.title}
                        </li>
                    )

                })}
            </ul>
        </section>
    );
}

export default FilterList;
