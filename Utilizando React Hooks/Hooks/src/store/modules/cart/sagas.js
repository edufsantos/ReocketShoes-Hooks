// o  * depois do function é uma funcionalidade do java script chamada generetor
//como se fosse async
import { call, select,  put,all, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api';
import { addToCartSuccess,updateAmountSuccess} from './actions'
import { formatPrice } from '../../../util/format';
import history from '../../../services/history'
import {toast} from 'react-toastify'  

function* addToCart({ id  }){
  const productExists = yield select(
    state => state.cart.find(p => id === p.id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount :  0;

  const amount = currentAmount + 1;

  if(amount > stockAmount){
    toast.error('Não há essa quantidade no estoque');
    return;
  }

  if(productExists){
    yield put(updateAmountSuccess(id,amount ))
  }else{
    const response = yield call(api.get, `/products/${id}`);

    const data ={
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    }
    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
} 
function* updateAmount({ id, amount}){
  if(amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if(amount > stockAmount){
    toast.error('Não há essa quantidade no estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  // takeLatest execulta a ultima funcao caso haja varias requisicoes simultanes
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
]);