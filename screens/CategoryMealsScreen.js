import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CategorieMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The categorie meals screen
            </Text>
            <Button title="Go to meal details" onPress={() => {
                props.navigation.navigate('MealDetails');
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategorieMealsScreen;