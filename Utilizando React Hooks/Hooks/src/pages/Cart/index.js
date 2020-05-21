import React from 'react';
import { connect } from 'react-redux'
import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import {bindActionCreators} from 'redux'
import * as CartActions from '../../store/modules/cart/actions'
import { formatPrice } from '../../util/format';
function Cart({cart, total, removeFromCart, updateAmountRequest}) {

  function increment(carrinho){
    updateAmountRequest(carrinho.id, carrinho.amount + 1);
  }
  
  function decrement(carrinho){
    updateAmountRequest(carrinho.id, carrinho.amount - 1);
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
                  <MdDelete size={20} color="red" onClick={ () => removeFromCart(carrinho.id)}/>
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
const mapStateToProps = state =>({
  cart: state.cart.map(carrinho => ({
    ...carrinho,
    subtotal: formatPrice(carrinho.price * carrinho.amount)
  })),
  total: formatPrice( state.cart.reduce((total, carrinho) => {
    return total + carrinho.price * carrinho.amount; 
  }, 0))

})
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart);