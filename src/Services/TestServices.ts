import { Http } from "./Http";

const http = new Http();

export interface IAllList {
    count: number;
    entries: {
        API: string;
        Description: string;
    }[]
}

const getAllTestList = (): Promise<IAllList | null> => http.get('entries').then((response) => {
    return response.data;
}).catch((err) => {
    console.log(err)
    return null
});

const getRandom = (): Promise<IAllList | null> => http.get('random').then((response) => {
    return response.data;
}).catch(() => null);

export { getAllTestList, getRandom }