import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>
                                    {props.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>
                            {props.duration}m
                        </Text>
                        <Text>
                            {props.complexity.toUpperCase()}
                        </Text>
                        <Text>
                            {props.affordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#e1e1e1',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '80%'
    },
    mealDetail: {
        height: '20%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        width: "100%",
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;