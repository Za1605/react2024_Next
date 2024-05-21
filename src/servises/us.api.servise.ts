import axios, {AxiosResponse} from "axios";
import {UserModel} from "../models/UserModel";
import {PostModel} from "../models/PostModel";

let axiosInstanse = axios.create({
    baseURL:'https://dummyjson.com',
    headers: {'content-type': 'application/json, charset=UTF-8'},
});

const getAllUsers = (): Promise<AxiosResponse<UserModel>> =>{
    return axiosInstanse.get('/users');
}

const getAllPostsOfSingleUser= (id: number):Promise<AxiosResponse<PostModel[]>> =>{
    return axiosInstanse.get('/posts/'+id);
}

export {
    getAllUsers,
    getAllPostsOfSingleUser,
}