import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Switch, Platform } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText >
                {props.label}
            </DefaultText>
            <Switch value={props.state}
                trackColor={{ true: Colors.primaryColor, false: '#ccc' }} s
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                onValueChange={props.onValueChange} />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <DefaultText style={styles.title}>
                Available Filters / Restrictions
            </DefaultText>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onValueChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onValueChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onValueChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onValueChange={newValue => setIsVegetarian(newValue)} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>),
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" onPress={() => {
                //For this, check the useEffect hook and the function called within it.
                //Here we use getParam as a function because we are pointing to a function: 
                //"save" is a function which is set as a callback in the setParam function 
                //like "navigation.setParams({ save: saveFilters });".
                return navData.navigation.getParam('save')();
            }} />
        </HeaderButtons>)
    };
};

export default FiltersScreen;