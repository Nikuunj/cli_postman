import axios from 'axios';

export async function getData(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      return response.data; // Return the actual response data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error for handling in the calling function
    }
}