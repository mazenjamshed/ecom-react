import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import SHOP_DATA from "./shop.data.jsx";
import React from "react";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps}></CollectionPreview>
    ));
  }
}

export default Shop;
