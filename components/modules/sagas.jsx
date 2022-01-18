import { put, takeEvery, call, all, select } from 'redux-saga/effects';
import axios from 'axios';

function fetchQuakes() {
    return axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
}

export function* handleLoadQuakes() {
    try {
        console.log('handleLoadQuakes');
        let resp = yield call(fetchQuakes);

        yield put({
            type: 'SET_QUAKES',
            quakes: resp.data.features,
        });
    } catch (e) {
        console.error(e);
    }
}

export function* watchRefreshQuakes() {
    yield takeEvery('REFRESH_QUAKES', handleLoadQuakes);
}
