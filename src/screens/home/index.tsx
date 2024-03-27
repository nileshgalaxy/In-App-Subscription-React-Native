import React from 'react';
import {Text} from 'react-native';
import {PrimaryButton, AppStatusBar} from '../../components/common';
import {strings} from '../../localization';
import {theme} from '../../styles';
import {Container} from '../../styles/style';
import {INavigation} from '../../types';

/**
 * props type declaration
 */
interface HomeProps {
  navigation?: INavigation;
}

/**
 * desc: Home screen UI
 */
const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {home} = strings;

  return (
    <Container>
      <AppStatusBar />
      <Text>{home}</Text>
    </Container>
  );
};

export default Home;
