import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id
                    }
                });
            }}>
                <View >
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

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