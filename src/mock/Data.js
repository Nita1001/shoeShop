import uniqid from 'uniqid';
import short from '../images/4InchShorts.PNG';
import dropSet from '../images/dropsetTrainer.PNG';

const items = [
    {
        id: uniqid(),
        price: '49',
        title: 'shorts',
        model: short
    },
    {
        id: uniqid(),
        price: '32',
        title: 'shoe',
        model: dropSet
    },
    {
        id: uniqid(),
        price: '44',
        title: 'shoe1',
        moderl: 'https://media.shoesonline.co.il/2022/07/ME420LB2_1-1-555x555.jpg'
    }

]

export default items;