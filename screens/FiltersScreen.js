import React, { useState } from 'react';
import { View, StyleSheet, Switch, Platform } from 'react-native';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

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
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

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

export default FiltersScreen;