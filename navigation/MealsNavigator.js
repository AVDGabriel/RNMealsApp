import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import react from 'react';

const MealsNavigator = createStackNavigator({
    //We can use any identifier as a property name.
    Categories: {
        screen: CategoriesScreen,
        headerOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    //This is a shorter version of writting the above line of code. 
    //Here we can add more configurations to the navigation.
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetails: {
        screen: MealDetailsScreen
    }
}, {
    initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const MealFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor} />
                );
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-star"
                        size={25}
                        color={tabInfo.tintColor} />
                );
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'android' ? Colors.accentColor : 'white'
    }
});

export default createAppContainer(MealFavTabNavigator);