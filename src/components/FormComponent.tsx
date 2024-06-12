import React, {FC} from 'react';

import {useForm} from "react-hook-form";

interface IFormProps{
    body:string,
    title:number,
    userId:string,
}
const FormComponent:FC = () =>{
 let formObj = useForm<IFormProps>();
 let {register,handleSubmit}= formObj;


const save = ({body, title, userId}:IFormProps)=>{

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId:userId
        })
    }).then(value => value.json())
        .then(value => console.log(value));
};

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>

                <input type= "text" {...register('body')}/>
                <input type= "number" {...register("title")}/>
                <input type="text"{...register('userId')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;