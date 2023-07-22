import React from "react";
import {clearNotificationMessage} from "../../store/shopingCartSlice";
import {AiFillCloseCircle} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import './NotificationBarStyle.css'

export const NotificationBar = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.cart.notification)
    return (
        <div className="container-fluid">
            <ul className={'notificationBar'}>
                {
                    notification.map((notification, index) =>

                        <li key={index}>

                            <div className={'notification-container'}>
                                <div className="">
                                    <span> &#10003; &nbsp;&nbsp; {Object.values(notification)} </span>
                                </div>
                                <div>
                                     <span className="">
                                           <button
                                               onClick={() => dispatch(clearNotificationMessage(index))}><AiFillCloseCircle
                                               className={'close-icon '}
                                               ></AiFillCloseCircle>
                                           </button>
                                    </span>
                                </div>

                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}