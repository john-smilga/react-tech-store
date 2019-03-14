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
    links: linkData,
    socialLinks: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {}
  };
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // handle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  // close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  // component did mount
  componentDidMount() {
    this.setProducts(items);
    // client
    //   .getEntries({ content_type: "techStoreProduct" })
    //   .then(results => console.log(results.items));
  }
  // set products
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const product = { id, ...item.fields };
      return product;
    });
    // console.log(storeProducts);
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorage()
      },
      () => this.addTotals()
    );
  };
  getStorage = () => {
    let cart;
    if (JSON.parse(localStorage.getItem("cart"))) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartItems: totals.cartItems,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => {}
    );
  };
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
    }
    // console.log(product);

    this.setState(
      () => {
        return {
          cart: tempCart
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    this.setState(
      {
        singleProduct: { ...product }
      },
      () => console.log(this.state.singleProduct)
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
