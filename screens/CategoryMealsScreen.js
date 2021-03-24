import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(x => x.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = itemData => {
        return (<MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetails',
                    params: {
                        mealId: itemData.item.id
                    }
                });
            }} />);
    };

    return (
        <View style={styles.screen}>
            <FlatList style={{ width: '100%', padding: 10 }} data={displayedMeals} renderItem={renderMealItem} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(x => x.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;