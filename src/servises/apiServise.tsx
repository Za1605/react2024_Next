// @ts-ignore

import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";

let axiosInstance= axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers:{}
});

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");

    },

    getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
        return await axiosInstance.get(`users/${userId}`);
    },



    getPostsOfUser (userId:number):
        Promise<AxiosResponse<IPostModel>>  =>
{
        return axiosInstance.get(`users/${userId}/posts`);
}
export default {
    userApiService,
    getPostsOfUser(id: string) {
        
    }
};