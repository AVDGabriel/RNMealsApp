import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    //We always wnt to display the meals that are filtered by the user, 
    //that's why we use the filteredMeals in the useSelector hook.
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(x => x.categoryIds.indexOf(catId) >= 0);

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