import axios from 'axios';

export async function postData(url: string, data: object | string): Promise<any> {
    try {
        const isJson = typeof data === 'object'; // Check if data is an object
        const headers = { 
            'Content-Type': isJson ? 'application/json' : 'text/plain' 
        };

        const response = await axios.post(url, data, { headers });
        return response.data; 
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
