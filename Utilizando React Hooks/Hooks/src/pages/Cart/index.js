import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice } from '../../util/format';


export default function Cart() {
  const total = useSelector(state => formatPrice( state.cart.reduce((totalSum, carrinho) => {
    return totalSum + carrinho.price * carrinho.amount; 
  }, 0)))

  const cart = useSelector(state => state.cart.map(carrinho => ({
    ...carrinho,
    subtotal: formatPrice(carrinho.price * carrinho.amount)
  })))
  
  const dispatch = useDispatch()

  function increment(carrinho){
    dispatch(CartActions.updateAmountRequest(carrinho.id, carrinho.amount + 1));
  }
  
  function decrement(carrinho){
    dispatch(CartActions.updateAmountRequest(carrinho.id, carrinho.amount - 1));
  }
  
  return (
   <Container>
     <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(carrinho => (     
            <tr key={carrinho.id}>
              <td>
                  <img src={carrinho.image} alt=""/>
              </td>
              <td>
                <strong>Tenis Bâo</strong>
                <span>{formatPrice(carrinho.price)}</span>
              </td>
              <td>
                <div>
                    <button>
                      <MdRemoveCircleOutline onClick={() => decrement(carrinho)} size={20} color="#7159c1"/>
                    </button>
                    <input type="number" readOnly value={carrinho.amount}/>
                    <button>
                      <MdAddCircleOutline onClick={() => increment(carrinho)} size={20} color="#7159c1"/>
                    </button>
                </div>
              </td>
              <td>
                <strong>{carrinho.subtotal}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="red" onClick={ () => dispatch(CartActions.removeFromCart(carrinho.id))}/>
                </button>
              </td>
            </tr>

          ))}
        
        </tbody>
     </ProductTable>

     <footer>
       <button type="Button"> finalizar pedido</button>
      <Total>
        <span>Total</span>
        <strong>{total}</strong>
      </Total>
     </footer>
   </Container>
  );
}