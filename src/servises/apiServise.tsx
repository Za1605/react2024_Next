import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";

let axiosInstanse= axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers:{}
});

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstanse.get("/users");

    },

    getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
        return await axiosInstanse.get(`users/${userId}`)
    }



    getPostsOfUser: (userId: number): Promise<AxiosResponse<IPostModel>> => {
        return axiosInstanse.get(`users/${userId}/posts`)
    }
}
export default userApiService;