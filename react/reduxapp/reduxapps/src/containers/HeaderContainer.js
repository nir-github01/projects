import Header from '../components/Header';
import {connect} from "react-redux";
import { addToCart } from '../Services/Action/Action';

const mapStateToProps =(state)=>({
     itemsStateData:state
})

const mapDispatchToProps = (dispatch) => ({
      addTOCartHandler:data=>dispatch(addToCart(data))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Header)