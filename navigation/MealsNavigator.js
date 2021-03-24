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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const MealsNavigator = createStackNavigator({
    //We can use any identifier as a property name.
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
    }
});

const tabScreenConfig = {
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
            },
            //This works just if the shifting prop from createMaterialBottomTabNavigator 
            //function is set to true.
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: "Favorites",
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-star"
                        size={25}
                        color={tabInfo.tintColor} />
                );
            },
            //This works just if the shifting prop from createMaterialBottomTabNavigator 
            //function is set to true.
            tabBarColor: Colors.accentColor
        }
    }
};

const MealFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
            activeTintColor: 'white',
            shifting: true,
            //Use shifting: false and barStyle if you want to no use the 
            //shifting effect, but still change the bar color.
            //Otherwise, the tabBarColor won't change the bar color.
            // shifting: false,
            // barStyle: {
            //     backgroundColor: Colors.primaryColor
            // }
        })
    : createBottomTabNavigator(
        tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    });

export default createAppContainer(MealFavTabNavigator);