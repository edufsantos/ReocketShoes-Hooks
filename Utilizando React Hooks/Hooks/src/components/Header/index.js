import React from 'react';
import { Container, Cart } from './styles';
import {connect} from 'react-redux'
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';

function Header({TamanhoCarrinho}){
  return(
    <>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>{TamanhoCarrinho}itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff"/>

        </Cart>
      </Container>


      
    </>
  );
}

export default connect(
  state => ({
    //cart é o nome do reducer a ser utilizado
    TamanhoCarrinho: state.cart.length
  })
)(Header);