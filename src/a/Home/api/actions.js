
import API from './api';

import {
    HOME_LIST,
} from './constants';

export function fetchHomeList(params) {
    return dispatch => {
        // console.log(111);
       return API.fetchHomeList.post(params)
        .then((res) => {
               dispatch({
                   type: HOME_LIST,
                   data: res.contents,
                   params,
               });
               return res.contents;
           }); 
    };
}

