import {useState} from "react";
import { useHistory } from "react-router-dom";
import {FetchData} from "./FetchAllData";



const FormUser = () =>{

    const [company,setCompany] = useState('');
    const [email,setEmail] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [value,setValue] = useState('');
    
    const history = useHistory();
    
    const handleOnClick = (e) => {
        // e.preventDefault();
        const data = {company,email,date,time,value};
        
        
        fetch("http://localhost:8000/appointment",{
            method:"POST",
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(data)
        }).then( ()=> {
            console.log('One more appointment has been upload');
            //<FetchData />
            //history.push('/');

        })


    }

    return(

        <div className="formUser">
            <form onSubmit={handleOnClick}> 
                <label>Title:</label>
                <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} ></input>
                <label>Email:</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                <label>Date:</label>
                <input type="text" required value={date} onChange={(e) => setDate(e.target.value)} ></input>
                <label>Time:</label>
                <input type="text" required value={time} onChange={(e) => setTime(e.target.value)} ></input>
                <label>Value:</label>
                <input type="number" required value={value} onChange={(e) => setValue(Number(e.target.value))} ></input>
                <button type="button" className="btn btn-primary ml-3">Done</button>
            </form>
            
            
            
        </div>

    );

}

export {FormUser}