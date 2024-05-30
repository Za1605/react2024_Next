import React, {useRef, useState} from 'react';
//1. useToggle - custom React hook that allows a component to toggle a value between true and false
//import { useState } from "react"
const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);

   function funkTogle(valueSec: boolean) {
       setValue(prevValue => !valueSec);
   }
return[value, funkTogle];
};

let [value, funkTogle ] =useToggle(true);

funkTogle(false);


//2. usePrevious - hook that allows a component to keep track of the previous value of a variable

const usePrevious =(value:any)=>{
    const currentRef = useRef(value);
    const prevRef = useRef();

    if(currentRef.current !== value){
        prevRef.current = currentRef.current;
    }
    return prevRef;
}

usePrevious(100);


//3. useStorage - hook that allows a component to store a value in the browser's LocalStorage


