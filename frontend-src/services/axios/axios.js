import Axios from 'axios';

if (!window.Axios) {
    window.Axios = Axios.create({
        headers: {
            Accept: "application/json",
        },
        responseType: "json",
    });
}

export default window.Axios;
