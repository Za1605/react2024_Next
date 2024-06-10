import React, {FC} from 'react';
import App from "../App";

interface IFormProps{
    username:string,
    age:number,
    password:string,
}
const FormComponent:FC = () =>


    return (
        <div>
            <form>
                <input type= "text" name={'username'}/>
                <input type= "number" name={'age'}/>
                <input type="text" name={'password'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;