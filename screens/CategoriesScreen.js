import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                The categories screen
            </Text>
            <Button title="Go to meals" onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' });
                //Variant 2 - you go to the second screen, but you can not go back because 
                //this functions doesn't add the second screen to the stack.
                //Variant 2 -takes only the string identifier as a value.
                //Variant 2 can be used on login screen when you don't want the user to be 
                //able to go back to the login screen once he is logged in.
                //props.navigation.replace('CategoryMeals');
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

export default CategoriesScreen;