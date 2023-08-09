import React from "react";
import './emptyShopingCart.css';
import {Link} from 'react-router-dom'

export const EmptyCart = () => {
    return (
        <div className={'mainEmptyCart'}>
            <img src={"/cart.668e6453.svg"}/>
            <p>عربة التسوق فارغة</p>
            <span>&#33;تصفح الفئات واكتشف أفضل عروضنا</span>
            <Link to={'/'}>
                <button className={'btn-empty-cart'}>بدء التسوق</button>
            </Link>
        </div>
    )
}