import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText >{props.children}</DefaultText>
        </View>
    );
};

const MealDetailsScreen = props => {
    const { navigation } = props;
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(x => x.id === mealId);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>
                    {selectedMeal.duration}m
                </DefaultText>
                <DefaultText>
                    {selectedMeal.complexity.toUpperCase()}
                </DefaultText>
                <DefaultText>
                    {selectedMeal.affordability.toUpperCase()}
                </DefaultText>
            </View>
            <DefaultText style={styles.title}>
                Ingredients
            </DefaultText>
            {selectedMeal.ingredients.map((ingredient) =>
                <ListItem key={ingredient}>
                    {ingredient}
                </ListItem>
            )}
            <DefaultText style={styles.title}>
                Steps
            </DefaultText>
            {selectedMeal.steps.map((step) =>
                <ListItem key={step}>
                    {step}
                </ListItem>
            )}
        </ScrollView>
    );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(x => x.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName="ios-star" onPress={() => {
                console.log("Mark as favorite!")
            }} />
        </HeaderButtons>)
    };
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailsScreen;