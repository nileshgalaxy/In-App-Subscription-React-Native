import React, {useEffect, useState} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NAV_LOGIN, NAV_TAB_HOME} from '../../../navigation/constants';
import {strings} from '../../../localization';
import {
  MenuItemContainer,
  MenuItemDivider,
  MenuItemRow,
  MenuText,
  ProfileContainer,
  SideMenuContainer,
  SideMenuIcon,
  SideMenuProfileIcon,
} from './styled';
import LanguageModal from '../../../localization/languagePopup';
import {getStorageItem} from '../../../utils';
import {ASYNC_CONST} from '../../../constants/utils';
import {DEFAULT_LOCALE} from '../../../localization/utils/constants';

const MENU_OPTIONS = [
  {
    title: strings.home,
    route: NAV_TAB_HOME,
    icon: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg',
  },
  {
    title: strings.changeLanguage,
    isChangeLanguage: true,
  },
  {
    title: strings.logout,
    route: NAV_LOGIN,
    icon: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg',
    isLogOut: true,
  },
];

/**
 * desc: Drawer/Side menu UI
 * @param props
 * @returns
 */
const SideMenu: React.FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(DEFAULT_LOCALE);

  /**
   * desc: common method to navigate to other screen
   * @param route
   */
  const navigateTo = (route: string) => {
    navigation?.navigate(route);
  };

  /**
   * desc: method to logout user
   */
  const onLogout = () => {
    // clearStorage();
    navigateTo(NAV_LOGIN);
  };

  /**
   * desc: method to handle menu option on press event
   * @param optionObj
   */
  const handleOnPress = (optionObj: any) => {
    if (optionObj.isLogOut) {
      onLogout();
    } else if (optionObj?.isChangeLanguage) {
      setModalVisible(true);
    } else {
      navigateTo(optionObj.route);
    }
  };

  /**
   * desc: method to render menu option UI
   * @returns
   */
  const renderMenuOption = () => {
    return MENU_OPTIONS.map((item, index) => {
      return (
        <MenuItemRow key={`menuOption${index}`}>
          <SideMenuIcon source={{uri: item.icon}} />
          <MenuText onPress={() => handleOnPress(item)}>{item.title}</MenuText>
        </MenuItemRow>
      );
    });
  };
  /**
   * Name: useEffect
   * Desc: to get language locale
   */
  useEffect(() => {
    getStorageItem(ASYNC_CONST.LANGUAGE_KEY).then(languageData => {
      let locale = DEFAULT_LOCALE;
      if (languageData) {
        locale = JSON.parse(languageData);
      }
      setLanguage(locale);
    });
  }, []);
  return (
    <SideMenuContainer>
      <DrawerContentScrollView>
        <ProfileContainer>
          <SideMenuProfileIcon
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg',
            }}
          />
        </ProfileContainer>
        <MenuItemDivider />
        <MenuItemContainer>{renderMenuOption()}</MenuItemContainer>
        <MenuItemDivider />
      </DrawerContentScrollView>
      <LanguageModal
        selectedLanguageCode={language}
        onChange={() => {
          setModalVisible(false);
        }}
        modalVisible={modalVisible}
        onLanguageChange={() => {
          setModalVisible(false);
        }}
      />
    </SideMenuContainer>
  );
};

export default SideMenu;
