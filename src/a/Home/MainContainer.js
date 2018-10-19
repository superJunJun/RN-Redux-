import { connect } from 'react-redux';
import MainView from './Main';
import { fetchHomeList } from './api/actions';

const mapStateToProps = state => {
    return {
        list: state.HomeReduce.list,
        moreData:state.HomeReduce.moreData,
    };
};

const mapDispatchToProps = {
    fetchHomeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
