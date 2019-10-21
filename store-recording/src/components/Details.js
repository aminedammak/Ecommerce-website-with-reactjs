import React, { Component } from 'react';
import { ProductsConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {

        return (
            <ProductsConsumer>
                {value => {
                    let { id, title, img, price, company, info, inCart } = value.detailsProduct;
                    return (
                        <div className="container">
                            <h3>{title}</h3>
                            <img src={img} alt={title} />
                            <p>{info}</p>
                            <ButtonContainer className="mr-2">Back to products</ButtonContainer>
                            <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                value.addToCart(id)
                            }}>Add to card</ButtonContainer>
                        </div>
                    );
                }}
            </ProductsConsumer>
        );
    }
}