import axios from 'axios';

export async function deleteData(url: string, data: object | string): Promise<any> {
    try {
        const isJson = typeof data === 'object'; // Check if data is an object
        const headers = { 
            'Content-Type': isJson ? 'application/json' : 'text/plain' 
        };

        const response = await axios.delete(url, {
            headers,
            data: data // Correct way to send data in a DELETE request
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
    }
}