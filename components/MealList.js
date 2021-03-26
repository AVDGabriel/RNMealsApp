import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';

const MealList = props => {
    const { navigation, data, style } = props;
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        //The some() function returns true if any item matches the condition.
        const isFav = favoriteMeals.some(x => x.id === itemData.item.id);
        return (<MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            onSelectMeal={() => {
                navigation.navigate({
                    routeName: 'MealDetails',
                    params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFav
                    }
                });
            }} />);
    };

    return (
        <View style={styles.list}>
            <FlatList
                style={{ ...{ width: '100%', padding: 10 }, ...style }}
                data={data}
                renderItem={renderMealItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;