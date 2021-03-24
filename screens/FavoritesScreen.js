import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(x => x.id === 'm1' || x.id === 'm2');

    return (
        <MealList data={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Filters" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    };
};

export default FavoritesScreen;