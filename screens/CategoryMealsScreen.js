import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CategorieMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The categorie meals screen
        </Text>
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