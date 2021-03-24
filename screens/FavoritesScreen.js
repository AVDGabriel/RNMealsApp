import React from 'react';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(x => x.id === 'm1' || x.id === 'm2');

    return (
        <MealList data={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default FavoritesScreen;