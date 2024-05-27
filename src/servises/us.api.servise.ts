import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

let axiosInstanse = axios.create({
    baseURL:'https://dummyjson.com',
    headers: {'content-type': 'application/json, charset=UTF-8'},
});

const getAllUsers = (): Promise<AxiosResponse<IUserModel>> =>{
    return axiosInstanse.get('/users');
}

const getAllPostsOfSingleUser= (id: number):Promise<AxiosResponse<IPostModel[]>> =>{
    return axiosInstanse.get('/posts/'+id);
}

export {
    getAllUsers,
    getAllPostsOfSingleUser,
}