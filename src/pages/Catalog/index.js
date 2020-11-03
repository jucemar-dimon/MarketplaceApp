import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';
import formatValue from '../../utils/formatValue';
import api from '../../services/api';
import * as cartActions from '../../store/modules/cart/actions';

import {
  Container,
  PriceContainer,
  Product,
  ProductButton,
  ProductButtonText,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle,
} from './styles';

const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  console.log('products', products);

  async function loadProducts() {
    const { data } = await api.get('/products');
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(cartActions.addToCartRequest(id));
  }

  const renderProducts = ({ item }) => {
    return (
      <Product>
        <ProductImage source={{ uri: item.image_url }} />
        <ProductTitle>{item.titulo}</ProductTitle>
        <PriceContainer>
          <ProductPrice>{formatValue(item.price)}</ProductPrice>
          <ProductButton onPress={() => handleAddToCart(item.id)}>
            <ProductButtonText>Adicionar</ProductButtonText>
            <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
          </ProductButton>
        </PriceContainer>
      </Product>
    );
  };
  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => `${item.id}`}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={renderProducts}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Catalogo;
