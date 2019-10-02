import React from 'react';
import { useSelector } from 'react-redux';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationService from '../../services/navigation';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => NavigationService.navigate('Home')}
            style={{ width: 200, height: 30 }}
          >
            <Logo />
          </TouchableOpacity>
        </View>
        <BasketContainer onPress={() => NavigationService.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
