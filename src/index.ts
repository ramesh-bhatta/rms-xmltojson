import axios from 'axios'; // You'll need to install axios if you haven't already
import { parseString } from 'xml2js';


export async function xmlToJsonFromUrl(xmlUrl: string): Promise<any> {
    try {
        const response = await axios.get(xmlUrl);
        return xmlToJson(response.data);
    } catch (error) {
        throw new Error(`Failed to fetch XML from ${xmlUrl}: ${error}`);
    }
}

export function xmlToJson(xml: string): Promise<any> {
    return new Promise((resolve, reject) => {
        parseString(xml, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}


