// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css"

function Header({cartItems}){

    let totalcount = 0;
    for (let cartItem of cartItems) {
        totalcount += cartItem.count;
    }
    return(
        <>
            <div className="header-container">
                <div className="header-content">
                    <div className="header_logo">UserReducer</div>
                    <div className="header_cartBtn">
                        <span className="cartlogo">Cart </span>
                        <span className="cartCount">{totalcount}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;