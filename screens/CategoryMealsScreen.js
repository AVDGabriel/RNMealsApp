import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(x => x.id === catId);

    return (
        <View style={styles.screen}>
            <Text>
                The categorie meals screen
            </Text>
            <Text>
                {selectedCategory.title}
            </Text>
            <Button title="Go to meal details" onPress={() => {
                //Variant 1.
                props.navigation.navigate('MealDetails');
                //Variant 2 - this is usefull if you want to go to a page that you already are on.
                //Variant 2 takes a string identifier as a value.
                //Variant 2 will push over and over the same screen to the stack. It is usefull when 
                //you work with directories and you display the same component, but with other data.
                //props.navigation.push('MealDetails');
            }} />
            <Button title="Go back" onPress={() => {
                props.navigation.goBack();
                //Variant 2 - the same like goBack(), but can be used when we got a stack.              
                //props.navigation.pop();
            }} />
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