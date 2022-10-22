import React, {useState} from 'react';
import {useGetUserData} from "../../../hooks/useGetUserData";
import {Badge, Button, Form, FormControl} from "react-bootstrap";
import {set,ref} from "firebase/database";
import {realtimeDB} from "../../../database";
import {getGraphDate} from "../../../functions/getGraphDate";

const RedactPassword = ({user}) => {

    const [formData,setFormData] = useState({
        password: '',
        copyPassword: '',
    })

    const [resForm,setResForm] = useState({error:false, message: ''});

    const userData = useGetUserData(user.uid);
    // console.log(userData);

    const handleAdd = (e) =>{
        e.preventDefault();

        //check password and copy password
        if(formData.password !== formData.copyPassword){
            setResForm({error:true, message: 'Пароли не совпадают'})
            return false
        }

        set(ref(realtimeDB, `/users/${user.uid}`),{
            uid:user.uid,
            password:formData.password,
            dateRedactPass: getGraphDate(Date.now()),
        })
            .then(() => setFormData({password: '', copyPassword: ''}))
            .then(() => setResForm({error:false, message: 'Пароль сохранен'}))
            .catch(() => setResForm({error:true, message: 'Пароль не сохранен, попробуйте позже'}))
    };

    return (
        <div className={'RedactPassword'}>
            {
                (Object.values(userData).length)?
                    <>
                        <Badge>Изменить пароль</Badge>
                        <Form className={'my-2'}>
                            <FormControl size={'sm'} type={"password"} placeholder={"Введите старый пароль"} />
                            <FormControl size={'sm'} type={"password"} placeholder={"Введите новый пароль"} />
                            <FormControl size={'sm'} type={"password"} placeholder={"Повторите пароль"} />
                            <Button size={'sm'}>Изменить пароль</Button>
                        </Form>
                    </>:
                    <>
                        <Badge>Добавьте пароль чтобы авторизоваться через него</Badge>
                        <Form className={'my-2'}>
                            <FormControl size={'sm'} type={"password"} placeholder={"Введите пароль"} />
                            <FormControl size={'sm'} type={"password"} placeholder={"Повторите пароль"} />
                            <Button size={'sm'}>Добавить пароль</Button>
                        </Form>
                    </>
            }
        </div>
    );
};

export default RedactPassword;
