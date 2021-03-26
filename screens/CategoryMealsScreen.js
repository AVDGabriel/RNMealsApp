import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import { View, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    //We always wnt to display the meals that are filtered by the user, 
    //that's why we use the filteredMeals in the useSelector hook.
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(x => x.categoryIds.indexOf(catId) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>
                    No meals found. Check your filters, maybe?
            </DefaultText>
            </View>
        );
    }

    return (
        <MealList data={displayedMeals} navigation={props.navigation} />
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(x => x.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
}

export default CategoryMealsScreen;