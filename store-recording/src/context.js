import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

//Provider
//Consumer

class ProductsProvider extends Component {

    state = {
        products: storeProducts,
        detailsProduct: detailProduct,
        cart: storeProducts,
        modalOpened: false,
        productInModal: {}
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

    getProduct = (id) => {
        return this.state.products.find(item => item.id === id);
    }

    handleDetail = (id) => {
        //find the product with id
        let product = this.getProduct(id);
        this.setState({
            detailsProduct: product
        })
    }

    addToCart = (id) => {
        //find the product with id
        let products = [...this.state.products].map(product => {
            if (product.id === id) {
                product.inCart = true;
                product.count = 1;
                product.total = product.price;
            }
            return product;
        });

        let cart = [...this.state.cart, this.getProduct(id)];


        this.setState(() => {
            return ({
                products,
                cart
            })
        });

    }

    openModal = (id) => {
        let productInModal = this.getProduct(id);

        this.setState({ modalOpened: true, productInModal })
    }

    closeModal = () => {
        this.setState({ modalOpened: false })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductsConsumer = ProductContext.Consumer;

export { ProductsProvider, ProductsConsumer };