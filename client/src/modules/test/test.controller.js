const TestController = {};

const ENV = import.meta.env;

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}`;

TestController.callToApi = async () => {
    const url = `${API_URL}/test`;  // ← Agregar la barra y quitar espacio
    
    try {
        // Opción 1: Usando async/await (recomendado)
        const response = await fetch(url, {
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Response from API:', data);
        return data;

    } catch (error) {
        console.error('❌ Error calling API:', error);
        console.error('Error details:', error.message);
        throw error; // Opcional: re-lanzar el error
    }
};

export default TestController;