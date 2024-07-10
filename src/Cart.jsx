import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
            <button>Checkout</button>
        <Link to="/">
            <button>Close</button>
        </Link>
        </div>
    )
}

export default Cart;