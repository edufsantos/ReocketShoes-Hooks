import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`

  padding: 30px;
  background: #fff;
  border-radius: 4px;
  align-items: center;

  footer{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      background: #7159c1;
      color:#fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight:bold;
      text-transform: uppercase;

      /* porpriedade para escurecer  o botão de compra */
      &:hover{
        background:${darken(0.1, '#7159c1')};
      }
    }
  }

`;
export const ProductTable = styled.table`
  @media only screen and (max-width: 660px) {
    flex-direction: row;
    img{
      width: 60px;
      height: 60px;
    }

  }
  @media only screen and (max-width: 500px) {
    thead{
      flex-wrap: wrap;
    }
    .image-size {
      display: none
    }
    span{
      font-size:16px;

    }
    thead th{
      padding: 0;
    }
  }
  width:100%;
  align-items: center;
  thead th{
    color: #999;
    text-align: left;
    padding:12px;
  }
  tbody td{
    padding:12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  img{
    max-width:200px;

  }
  strong{
    display: block;
    color: #333;
  }
  span{
    display: block;
    margin-top: 5px;
    font-weight:bold;
    font-size:18px;
  }
  div{
    display: flex;
    align-items:center;
    input{
      border: 1px solid #ddd;
      border-radius: 4px;
      color:#666;
      padding: 6px;
      width:50px;
    }

  }
  button{
      background: none;
      border: 0;
      padding: 6px;
    }

`;
export const Total = styled.ul`
  display: flex;
  align-items: baseline;

  span{
    color: #333;
    font-weight:bold;
  }
  strong{
    font-size:28px;
    margin-left:5px;
  }
`;

