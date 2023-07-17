import {NotificationBar} from "../../components/notificationBar/notificationBar";
import {Header} from "../../components/header/header";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
export  const Main = () => {

    const isLogen = useSelector(state => state.auth.userLogin);

    if(!isLogen) {
        return <Navigate  to="/login"/>
    }

    return (
        <div>
            <Header/>
        </div>
    )

}