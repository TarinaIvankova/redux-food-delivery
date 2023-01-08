import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart=()=>{
const cartItems =useSelector(getCartItems);
const totalPrice=useSelector(getTotalPrice);

    return(<div className="cart">
        
        <img className="cartIcon" src="https://cdn.icon-icons.com/icons2/1077/PNG/96/shoppingcart_77968.png" alt="kartinka"/> 
        
    {cartItems.map (cartItem=> <CartItem cartItem={cartItem}/>)}
    <h3>Total: $ {totalPrice} </h3>
    </div>)
}
export default Cart