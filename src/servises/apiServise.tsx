import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";

let axiosInstanse= axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers:{}
});

const userApiService = {
    getAllUsers:():Promise<AxiosResponse <IUserModel[]>> => {
        return axiosInstanse.get("/users");

    },

    getUserByUserId:async (userId:number):Promise<AxiosResponse<IUserModel>> =>{
      return await  axiosInstanse.get(`users/${userId}`)
    }
}

export default userApiService;