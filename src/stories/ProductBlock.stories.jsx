import React from 'react';
import { ProductBlock } from '../components/ProductBlock';

export default {
    title: 'Product Card/Blocks',
    component: ProductBlock
};

const Template = (args) => <ProductBlock {...args} />;

export const PrimaryBlock = Template.bind({});
PrimaryBlock.args = {
    cards: [
        {
            image: "https://images.pexels.com/photos/4626207/pexels-photo-4626207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Blazer Electric",
            price: '2.850'
        },
        {
            image: "https://images.pexels.com/photos/7664395/pexels-photo-7664395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Purple Book",
            price: '45.3'
        },
        {
            image: "https://images.pexels.com/photos/5690230/pexels-photo-5690230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Beauty Flower",
            price: '1.89'
        },
        {
            image: "https://images.pexels.com/photos/7537830/pexels-photo-7537830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Beauty Flower",
            price: '1.89'
        },
        {
            image: "https://images.pexels.com/photos/3810552/pexels-photo-3810552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Blazer Electric",
            price: '2.850'
        },
        {
            image: "https://images.pexels.com/photos/9226518/pexels-photo-9226518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            name: "Purple Book",
            price: '45.3'
        }
    ],
};
