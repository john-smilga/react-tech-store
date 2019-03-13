import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { client } from "./contentful";
import { items } from "./productData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    totalItems: 4,
    links: linkData,
    socialLinks: socialData,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: []
  };
  componentDidMount() {
    this.setProducts(items);
    // client
    //   .getEntries({ content_type: "techStoreProduct" })
    //   .then(results => console.log(results.items));
  }
  setProducts = products => {
    let storeProducts = [];
    products.forEach(({ fields, sys }) => {
      const product = { ...fields, ...sys };
      storeProducts = [...storeProducts, product];
    });
    // console.log(storeProducts);

    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts
    });
  };
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
