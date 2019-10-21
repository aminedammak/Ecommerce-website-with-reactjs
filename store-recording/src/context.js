import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductsProvider extends Component {

    state = {
        products: storeProducts,
        detailsProduct: detailProduct
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((product) => {
            tempProducts = [...tempProducts, product];
        });

        this.setState(() => ({
            products: tempProducts
        }));
    }

    handleDetail = () => {
        console.log("hello from details");
    }

    addToCart = () => {
        console.log("hello from Add to cart");
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductsConsumer = ProductContext.Consumer;

export { ProductsProvider, ProductsConsumer };