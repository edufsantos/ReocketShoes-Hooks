import React from 'react';
import { Container, Cart } from './styles';
import {useSelector} from 'react-redux'
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';

export default function Header(){
  const TamanhoCarrinho = useSelector(state => state.cart.length);
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
