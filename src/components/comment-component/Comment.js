import React,{ useEffect } from "react";

function Comment(props){
    const {prop1,prop2}=props;

    useEffect(()=>{
        console.log('Завантажено або змінено властивості {{ComponentDidMount}}');
    });

    useEffect(()=>{
        console.log('Завершення компоненту {{ComponentWillUnMount}}');
    },[]);

    useEffect(()=>{
        console.log('Зміна значення prop1 {{ComponentDidUpdate}}');
    },[prop1]);

    useEffect(()=>{
        console.log('Зміна значення prop2 {{ComponentDidUpdate}}');
    },[prop2]);

    return(
        <p>{prop1}: {prop2}</p>
    );
}

export default Comment;