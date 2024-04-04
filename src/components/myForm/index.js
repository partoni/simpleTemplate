import { useState } from "react";
import { MyInput } from "./MyInput";
import "./index.css"

export const MyForm = ()=>{
   
    let [values,setValues] = useState({
        username:'',
        lastname:'',
        car:'',
        carnumber:'',
        phone:''
    })
    const inputProps =[ 
        {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Username",
        error:"Используйте русские буквы",
        label:"Имя",
        isError:false
    },
        {
        id:2,
        name:"Lastname",
        type:"text",
        placeholder:"Lastname",
        error:"Используйте русские буквы",
        label:"Фамилия",
        isError:false
    },
        {
        id:3,
        name:"auto",
        type:"text",
        placeholder:"Auto",
        error:"Обязательное поле",
        label:"Автомобиль",
        isError:false
    },
        {
        id:4,
        name:"carnumber",
        type:"text",
        placeholder:"Carnumber",
        error:"Введите корректный номер",
        label:"Рег. знак",
        isError:false
    },
        {
        id:5,
        name:"phone",
        type:"text",
        placeholder:"Phone",
        error:"Введите корректный номер",
        label:"Телефон",
        isError:false
    },
    
]
    function handleSubmit(e){
        e.preventDefault()
        let data = new FormData(e.target)
        console.log('data',data.get('name'));
        console.log('auto',data.get('auto'));
        console.log('data entries',Object.fromEntries(data.entries()));
    }

    function handleChange(e){
        setValues({...values,[e.target.name]:e.target.value})
    }
    
    return(
        <form onSubmit = {handleSubmit}>
            {inputProps.map(input=><MyInput {...input} value={values[input.name]} handleChange={handleChange} />)}
          
            <button>Отправить</button>
        </form>
    )
}