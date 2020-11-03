import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #333;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: -20px;
  border-radius: 10px;
  background-color: #e83f5b;
`;
export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 30px 10px;
`;

export const Product = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 5px;
  background: #fff;
  padding: 15px 10px;
  border-radius: 10px;
`;

export const ProductImage = styled.Image`
  width: 150px;

  margin-right: 5px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;
export const ProductSinglePrice = styled.Text`
  font-size: 12px;
  margin-top: 8px;
  color: #414756;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  color: #e83f5b;
`;
export const ProductQuantity = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
  color: #e83f5b;
`;
export const ActionsContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-between;
`;
export const ActionsButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
`;

export const TotalProductsContainer = styled.View`
  bottom: 0;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px;
  border-radius: 10px;
  background: #e83f5b;
`;

export const TotalProductsText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  flex: 1;
  color: #fff;
`;

export const SubTotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
