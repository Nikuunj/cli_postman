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

export async function putData(url: string, data:object | string): Promise<any> {
    try {
        const isJson = typeof data === 'object'; // Check if data is an object
        const headers = { 
            'Content-Type': isJson ? 'application/json' : 'text/plain' 
        };
        const response = await axios.put(url,data, { headers });
        return response.data; // Return the actual response data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
}

export async function getData(url: string): Promise<any> {
  try {
      const response = await axios.get(url);
      return response.data; // Return the actual response data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error for handling in the calling function
  }
}

export async function patchData(url: string, data:object | string): Promise<any> {
    try {

        const isJson = typeof data === 'object'; // Check if data is an object
        const headers = { 
            'Content-Type': isJson ? 'application/json' : 'text/plain' 
        };
        const response = await axios.patch(url, data, { headers });
        return response.data; // Return the actual response datagitt 
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
}