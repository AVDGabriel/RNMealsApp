import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(x => x.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList data={displayedMeals} navigation={props.navigation} />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(x => x.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
}

export default CategoryMealsScreen;