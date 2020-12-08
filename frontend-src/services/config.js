import Axios from '@/services/axios/axios';

if (!window.config) {
    window.config = {};
    getConfig();
}

async function getConfig () {
    window.config = (await Axios.get('api/config')).data;
}

export default window.config;
