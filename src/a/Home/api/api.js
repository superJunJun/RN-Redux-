import BaseApi from '@api/baseApi';

class Api extends BaseApi {
    requestActions() {
        return [
            ['fetchHomeList', 'mobile/recruitment/list.json', 'POST'],
        ];
    }
}

export default new Api;