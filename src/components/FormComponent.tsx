import React, {FC} from 'react';

import {useForm} from "react-hook-form";

interface IFormProps{
    username:string,
    age:number,
    password:string,
}
const FormComponent:FC = () =>{
 let formObj = useForm<IFormProps>();
 let {register,handleSubmit}= formObj;




    return (
        <div>
            <form onSubmit={handleSubmit((fff)=>{
                console.log(fff);
            })}>
                <input type= "text" {...register('username')}/>
                <input type= "number" {...register("age")}/>
                <input type="text"{...register('password')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;