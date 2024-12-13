import React from 'react'
import { Btn } from '../../../AbstractElements'

export default function CustomizerFooter() {
    return (
        <div className="customizer-footer">
            <div className="d-flex align-items-center justify-content-around">
                <Btn color='primary' href="https://themeforest.net/user/pixelstrap/portfolio" target="_blank">
                    <i className="fa-solid fa-cart-shopping" /> Buy Now
                </Btn>
                <Btn color='primary' href="https://docs.pixelstrap.net/react/admiro/document/" target="_blank">
                    <i className="fa-solid fa-file-arrow-up" /> Document
                </Btn>
            </div>
        </div>
    )
}