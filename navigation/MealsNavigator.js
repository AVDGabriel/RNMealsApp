import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

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



export default createAppContainer(MealsNavigator);