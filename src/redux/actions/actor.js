import { createAction } from "@reduxjs/toolkit";
import { infoActor } from '../../api';

export const startFetchInfoActor = createAction('START_FETCH_INFO_ACTOR');
export const successFetchInfoActor = createAction('SUCCESS_FETCH_INFO_ACTOR');
export const errorFetchInfoActor = createAction('ERROR_FETCH_INFO_ACTOR');

export const fetchInfoActor = (actorName) => async (dispatch) => {

    if (actorName) {
        //Iniciar la llamada a la API
        let apiKey = '30db1237b9167f8afaf9e065b90d16b8';
        infoActor(apiKey, actorName)
            .then(info => {
                dispatch(startFetchInfoActor());
                dispatch(successFetchInfoActor({ info }));
            })
            .catch(error => {
                dispatch(errorFetchInfoActor(error.message))
            })
    } else {
        dispatch(errorFetchInfoActor("The image selected is not valid")); 
    }
}