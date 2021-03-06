import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform, Text } from 'react-native';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

const headerTitleStyles = {
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
};

const MealsNavigator = createStackNavigator({
    //We can use any identifier as a property name.
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        ...headerTitleStyles,
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
        ...headerTitleStyles,
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
            tabBarColor: Colors.primaryColor,
            // tabBarLabel:"Meals!!!",
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text>
                : "Meals"
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
            tabBarColor: Colors.accentColor,
            // tabBarLabel:"Favorites!!!",
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>
                : "Favorites"
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
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    });

const FiltersNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen,
        navigationOptions: {
            headerTitle: 'Filters'
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filters'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);