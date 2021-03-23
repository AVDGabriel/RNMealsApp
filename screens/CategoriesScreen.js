import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (itemData) => {
    return (
        <View style={styles.gridItem}>
            <Text>
                {itemData.item.title}
            </Text>
        </View>
    );
};

const CategoriesScreen = props => {
    return (
        //In older versions you have to use the keyExtractor property of the 
        //FlatList in order to not get an error for key.
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;