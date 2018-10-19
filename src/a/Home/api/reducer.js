import *as types from './constants';

import { fetchHomeList } from './actions';

const initialState = {
    list:[],
    moreData: false,
};

const action = {
    fetchHomeList
};

export default function HomeReduce(state=initialState, action) {
    switch (action.type) {
        case types.HOME_LIST:{
            const res = action.data;
            const page = res.pageIndex;
            const pageSize = res.pageSize;
            const total = res.total;
            const totalPage = total?(Math.ceil(total/pageSize)):0;
            const moreData = page < totalPage;
            let list = res.rows
            if (page > 1) {
                list = [...state.list, ...list];
            }

            return { list, moreData }
        }
        
        break;

        default:
        return state;
    }
}
