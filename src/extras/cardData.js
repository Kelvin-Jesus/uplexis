import cardDescription from "./cardDescription";

import { faSuitcase, faUniversity, faTree, faGavel, faBan, faGlobeAmericas, faGem, faMale, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

export default [
    {
        id: 1,
        category: 'profissional',
        title: 'Profissional',
        launchDate: new Date("Sun Feb 01 2022 21:34:56 GMT-0300"),
        description: '',
        icon: faSuitcase,
        price: 29.96
    },
    {
        id: 2,
        category: 'reguladores',
        title: 'Reguladores',
        launchDate: new Date("Sun Feb 17 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faUniversity,
        price: 24.99
    },
    {
        id: 3,
        category: 'socio ambiental',
        title: 'Sócio Ambiental',
        launchDate: new Date("Sun Feb 10 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faTree,
        price: 20.99
    },
    {
        id: 4,
        category: 'juridico',
        title: 'Jurídico',
        launchDate: new Date("Sun Feb 11 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faGavel,
        price: 19.99
    },
    {
        id: 5,
        category: 'restritivas',
        title: 'Listas Restritivas',
        launchDate: new Date("Sun Feb 14 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faBan,
        price: 22.99
    },
    {
        id: 6,
        category: 'midia',
        title: 'Mídia / Internet',
        launchDate: new Date("Sun Feb 05 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faGlobeAmericas,
        price: 10.99
    },
    {
        id: 7,
        category: 'bens',
        title: 'Bens e Imóveis',
        launchDate: new Date("Sun Feb 02 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faGem,
        price: 2.54
    },
    {
        id: 8,
        category: 'cadastro',
        title: 'Cadastro',
        launchDate: new Date("Sun Feb 10 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faMale,
        price: 12.36
    },
    {
        id: 9,
        category: 'financeiro',
        title: 'Financeiro',
        launchDate: new Date("Sun Feb 18 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faPiggyBank,
        price: 154.22
    },
    {
        id: 10,
        category: 'financeiro',
        title: 'Financeiro',
        launchDate: new Date("Sun Feb 22 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faPiggyBank,
        price: 21.65
    },
    {
        id: 11,
        category: 'midia',
        title: 'Mídia / Internet',
        launchDate: new Date("Sun Feb 20 2022 21:34:56 GMT-0300"),
        description: cardDescription,
        icon: faGlobeAmericas,
        price: 15.96
    },
]