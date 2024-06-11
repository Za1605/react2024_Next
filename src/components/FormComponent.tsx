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


const save = ({body, title, userId}:IFormProps)=>{
    console.log(formValues);
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            title: formValues.username,
            body: formValues.age,
            userId:
        })
    })
};

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>

                <input type= "text" {...register('username')}/>
                <input type= "number" {...register("age")}/>
                <input type="text"{...register('password')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;