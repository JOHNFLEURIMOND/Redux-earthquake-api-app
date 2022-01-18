import { fromJS } from 'immutable';


/** My Store **/
const myInitialState = fromJS({
    quakes: [],
})

export const myReducer = function (state = myInitialState, action) {
    switch (action.type) {
        case 'SET_QUAKES':
            return state.set('quakes', fromJS(action.quakes));
    }

    return state;
}
