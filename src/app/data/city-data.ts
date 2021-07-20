import City from '../models/city-model'

export const Cities : City[] = [
    {
        id : 0,
        name : 'Seoul',
        country: 'South Korea',
        review : 'Have fallen in love with this city after spending a year in Seoul for study aborad.',
        imgpath : '../../../assets/city/seoul.jpg',
        website : 'https://english.visitseoul.net/index'
    },
    {
        id : 1,
        name : 'Tokyo',
        country: 'Japan',
        review : 'The oldest temple in Tokyo--Sensō-ji. The best place to exprience the traditional Japanese culture.',
        imgpath : '../../assets/city/tokyo.jpg',
        website : 'https://www.gotokyo.org/en/index.html'
    }, 
    {
        id : 2,
        name : 'Singapore',
        country: 'Singapore',
        review : 'A city where you can find both the eastern and western cultures.',
        imgpath : '../../assets/city/singapore.jpg',
        website : 'https://www.visitsingapore.com/en/'
    },
    {
        id : 3,
        name : 'Chichen Itza',
        country: 'Mexico',
        review : 'When traviling to Cancun, defintly cannot miss Chichen Itza--One of the New 7 Wonders of the World!',
        imgpath : '../../assets/city/cancun.jpg',
        website : 'https://www.mexicancaribbean.travel/cancun/'
    },
    {
        id : 4,
        name : 'San Juan',
        country: 'Puerto Rico',
        review : 'A beautiful Caribbean island where you can find all the colorful Spanish colonial buildings.',
        imgpath : '../../assets/city/puerto_rico.jpg',
        website : 'https://www.discoverpuertorico.com/article/things-to-do-san-juan'
    }
];