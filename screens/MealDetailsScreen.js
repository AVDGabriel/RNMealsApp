import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = props => {
    const { navigation } = props;
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(x => x.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>
                {selectedMeal.title}
            </Text>
            <Button title="Go back to categories" onPress={() => {
                //go to the first screen from the stack.
                navigation.popToTop();
            }} />
        </View>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(x => x.id === mealId);

    return {
        headerTitle: selectedMeal.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;