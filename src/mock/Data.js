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
        model: 'https://media.shoesonline.co.il/2022/07/ME420LB2_1-1-555x555.jpg'
    },
    {   id: uniqid(),
        price: '140',
        title: 'shoe2',
        model: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d58dc67a-1479-4331-ab74-36d5188e05a7/free-run-5-road-running-shoes-DBLJkT.png'
    }
]

export default items;