import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = props => {
    const { navigation, data, style } = props;

    const renderMealItem = itemData => {
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
                        mealId: itemData.item.id
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