import React, { useEffect, useCallback, isValidElement } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/mealsAction';


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
    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(x => x.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        navigation.setParams({ isFav: currentMealIsFavorite });
    }, [currentMealIsFavorite]);

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
    mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Favorite" iconName={isFav ? "ios-star" : "ios-star-outline"} onPress={toggleFavorite} />
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