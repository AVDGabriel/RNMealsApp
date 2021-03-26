import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/mealsAction';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(x => x.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {
                    ...state,
                    favoriteMeals: updatedFavMeals
                };
            } else {
                const myMeal = state.meals.find(x => x.id === action.mealId);
                return {
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(myMeal)
                };
            }

        default:
            return state;
    }
};

export default mealsReducer;