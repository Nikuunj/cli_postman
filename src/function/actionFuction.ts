import { deleteData, putData, postData, patchData, getData } from "./fetcherFuction";


export const getAction = (url: string) => {
    getData(url)
    .then((data) => console.log(data))
    .catch((error) => console.error("Request failed:", error));
}

export const postAction = (url: string, data: string) => {
    let parsedData: object | string;

    try {
        parsedData = JSON.parse(data);
    } catch (error) {
        console.warn("Data is not valid JSON, sending as plain text.");
        parsedData = data; // Send as plain text if parsing fails
    }

    postData(url, parsedData)
        .then((res) => console.log(res))
        .catch((error) => console.error("Request failed:", error));
}

export const deleteAction = (url: string, data: string) => {
    let parsedData: object | string;

    try {
        parsedData = JSON.parse(data);
    } catch (error) {
        console.warn("Data is not valid JSON, sending as plain text.");
        parsedData = data; // Send as plain text if parsing fails
    }

    deleteData(url, parsedData)
        .then((res) => console.log(res))
        .catch((error) => console.error("Request failed:", error));
}

export const putAction = (url: string, data: string) => {
    let parsedData: object | string;

    try {
        parsedData = JSON.parse(data);
    } catch (error) {
        console.warn("Data is not valid JSON, sending as plain text.");
        parsedData = data; // Send as plain text if parsing fails
    }

    putData(url, parsedData)
        .then((res) => console.log(res))
        .catch((error) => console.error("Request failed:", error));
}

export const patchActoin = (url: string, data: string) => {
    let parsedData: object | string;

    try {
        parsedData = JSON.parse(data);
    } catch (error) {
        console.warn("Data is not valid JSON, sending as plain text.");
        parsedData = data; // Send as plain text if parsing fails
    }

    patchData(url, parsedData)
        .then((res) => console.log(res))
        .catch((error) => console.error("Request failed:", error));
}