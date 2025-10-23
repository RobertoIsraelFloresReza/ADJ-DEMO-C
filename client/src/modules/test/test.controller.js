const TestController = {};

const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE_URL}`;

TestController.callToApi = async () => {
    await fetch(`${API_URL}adj-demo/tes t`), {
        method: 'GET',
        headers: { 'Accept': 'application/json' }

    }.then(res => res.json()).then(res => {
        console.log('Response from API:', res);
    }).catch(err => {
        console.error('Error calling API:', err);
    });
};

export default TestController;