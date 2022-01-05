import axios from "axios";

export const shortenURL = async (url: string): Promise<Object> => {
    var headers = {
        'Authorization': `Bearer ${process.env.BITLY_TOKEN}`,
        'Content-Type': 'application/json'
    };
    
    var dataString = `{ "long_url": "${url}", "domain": "bit.ly"}`;
    
    const res = await axios.post('https://api-ssl.bitly.com/v4/shorten', dataString, {
        headers: headers,
    })
    
    return res.data;

}