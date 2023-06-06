import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
import CategoryShop from './CategoryShop';

export default function TabsCategory() {
  const { products } = useSelector(
    (state) => state.productSlice
  );
  const menCategory = products.filter(product => product.category === "men");
  const womenCategory = products.filter(product => product.category === "women");
  const jewwleryCategory = products.filter(product => product.category === "jewelery");
  const electroCategory = products.filter(product => product.category === "electronics");

  const [key, setKey] = useState('men');

  return (
    <>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="men" title="Men's Clothes">
      <CategoryShop category={menCategory} />
      </Tab>
      <Tab eventKey="women" title="Women's Clothes">
      <CategoryShop category={womenCategory} />
      </Tab>
      <Tab eventKey="Jewerly" title="Jewerly">
      <CategoryShop category={jewwleryCategory} />
      </Tab>
      <Tab eventKey="electronics" title="Electronics">
      <CategoryShop category={electroCategory} />
      </Tab>
    </Tabs>
  </>
  )
}
