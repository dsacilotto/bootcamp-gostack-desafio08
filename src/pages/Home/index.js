import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  ProductPrice,
  ProductTitle,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADD TO CART</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}

Home.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
  }),
};

Home.defaultProps = {
  item: null,
};
