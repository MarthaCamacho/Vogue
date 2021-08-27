import React from 'react';

import { ProductCard } from '../components/ProductCard';

export default {
  title: 'Product Card/Cards',
  component: ProductCard
};

const Template = (args) => <ProductCard {...args} />;

export const PrimaryCard = Template.bind({});
PrimaryCard.args = {
  image:"https://images.pexels.com/photos/4626207/pexels-photo-4626207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  name:"Blazer Electric",
  price:'2.850'
};

export const PrimaryCard2 = Template.bind({});
PrimaryCard2.args = {
  image:"https://images.pexels.com/photos/7664395/pexels-photo-7664395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  name:"Purple Book",
  price:'45.3'
};

export const PrimaryCard3 = Template.bind({});
PrimaryCard3.args = {
  image:"https://images.pexels.com/photos/1635927/pexels-photo-1635927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  name:"Beauty Flower",
  price:'1.89'
};