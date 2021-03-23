import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The meal details screen
        </Text>
            <Button title="Go back to categories" onPress={() => {
                //go to the first screen from the stack.
                props.navigation.popToTop();
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

export default MealDetailsScreen;