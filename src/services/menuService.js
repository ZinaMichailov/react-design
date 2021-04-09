import imgItem1 from '../assets/img/homepage/menu-items/menu-item1.jpg'
import imgItem2 from '../assets/img/homepage/menu-items/menu-item2.jpg'
import imgItem3 from '../assets/img/homepage/menu-items/menu-item3.jpg'

export const menuService =  {
    getItems
}

const items = [
    {
        title: 'Seared Salmon Fillet',
        desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        imgUrl: imgItem1
    },
    {
        title: 'Rosemary Filet Mignon',
        desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
        imgUrl: imgItem2
    },
    {
        title: 'Summer Fruit Chocolate Mousse',
        desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        imgUrl: imgItem3
    },

]

async function getItems() {
    return items;
}