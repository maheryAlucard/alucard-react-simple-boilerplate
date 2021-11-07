import  axios from "axios";

const base_url = "https://api.publicapis.org/"; //TODO changer le base url

class Http {

    get(url: string): Promise<any> {
        return axios.get<any>(base_url + url);
    }

    post(url: string, data: any): Promise<any> {
        return axios.post<any>(base_url + url, data);
    }
}

export { Http }