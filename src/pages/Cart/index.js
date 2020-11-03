import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import formatValue from '../../utils/formatValue';
import EmptyCart from '../../components/EmptyCart';
import * as cartActions from '../../store/modules/cart/actions';

import {
  Container,
  ActionsButton,
  ActionsContainer,
  Product,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductPriceContainer,
  ProductQuantity,
  ProductSinglePrice,
  ProductTitle,
  ProductTitleContainer,
  SubTotalValue,
  TotalContainer,
  TotalProductsContainer,
  TotalProductsText,
} from './styles';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.price * product.amount;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  }, [products]);

  function increment(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function removeFromCart(id) {
    dispatch(cartActions.removeFromCart(id));
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          ListEmptyComponent={<EmptyCart />}
          data={products}
          keyExtractor={(item) => item.id}
          listFooterComponent={<View />}
          ListFooterComponentStyle={{ height: 80 }}
          renderItem={({ item }) => (
            <Product key={`CART-${item.id}`}>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.titulo}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                  <TotalContainer>
                    <ProductQuantity>{`${item.amount}x`}</ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.amount)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionsContainer>
                <ActionsButton onPress={() => increment(item)}>
                  <FeatherIcon name="plus" color="#e83f5b" size={16} />
                </ActionsButton>
                <ActionsButton
                  onPress={() => {
                    item.amount > 1 ? decrement(item) : removeFromCart(item.id);
                  }}
                >
                  <FeatherIcon name="minus" color="#e83f5b" size={16} />
                </ActionsButton>
              </ActionsContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </TotalProductsText>
        <SubTotalValue>{cartTotal}</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
