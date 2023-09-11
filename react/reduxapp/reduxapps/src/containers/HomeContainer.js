import React from 'react'
import Home from '../components/Home';
import {connect} from "react-redux";
import { addToCart, removeToCart } from '../Services/Action/Action';

const mapStateToProps =(state)=>({
     itemsStateData:state
})

const mapDispatchToProps = (dispatch) => ({
      addTOCartHandler:data=>dispatch(addToCart(data)),
      removeTOCartHandler:data=>dispatch(removeToCart(data))
})

export default  connect(mapStateToProps, mapDispatchToProps)(Home)
