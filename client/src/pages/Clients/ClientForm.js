import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi";
import { useState } from "react";
import { Clients } from "./Clients";
export const ClientForm=()=>{
    const[goBack, setGoBack]=useState(false);
    if(goBack) return <Clients/>
    return(
        <ClientsFormCSS>
            <section className="clients-section">
                <section className="section-header">
                <button onClick={()=>setGoBack(true)} className="back-button"><HiArrowLeft/></button>
                <h1 className="h1-font">Create new patient</h1>
                </section>
                <section className="section-form">
                    <div className="row-1">
                        <ul>
                            <h1 className="font-form">Persönliche Daten</h1>
                            <li className="item">
                                <label>Name</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Lastname</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Civil Status</label>
                                <select className="select-form" id="gender" name="gender" placeholder="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </li>
                            <li className="item">
                                <label>Gender</label>
                                <select className="select-form" id="gender" name="gender" placeholder="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </li>
                            <li className="item">
                                <label>Email</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Location</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Advocate</label>
                                <select className="select-form" id="gender" name="gender" placeholder="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </li>
                            <li className="item">
                                <label>Bank</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>IBAN</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>SwiftCode</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Disease</label>
                                <input className="input-form" type="text"/>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="row-2">
                    <ul>
                            <h1 className="font-form">Lebende Daten</h1>
                            <li className="item">
                                <label>City</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Address</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Street</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Postal</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Stairs Number</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>Door Number</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <li className="item">
                                <label>House Number</label>
                                <input className="input-form" type="text"/>
                            </li>
                            <div className="form-buttons">
                            <button className="submit-form">Submit Form</button>
                            <button className="cancel-form">Cancel Form</button>

                            </div>    
                            
                        </ul>
                        
                    </div>
                </section>
            </section>
        </ClientsFormCSS>
       
    )
}
const ClientsFormCSS = styled.div`
.submit-form{
    background-color:#3F3B6C;
    border-color:1px solid  #3F3B6C;
    margin-right:10px;
    width: auto;
    height:50px;
    border-color:#3F3B6C;
    color:white;
    font-size:16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
.submit-form:hover{
    color: #3F3B6C;
    background-color:white;
    margin-right:10px
    width: auto;
    height:50px;
}
.cancel-form{
    border-color:  #3F3B6C;
    color: #3F3B6C;
    width: auto;
    height:50px;
    background-color:white;
    font-size:16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    
}
.cancel-form:hover{
    background-color:#3F3B6C;
    color:white;
    width: auto;
    height:50px;
}
.clients-section{
    margin:5%;
}
.section-header{
    display:flex;
}
.section-form{
    display:flex;
}
.back-button{
    background-color:white;
    border-left:none;
    border-top:none;
    border-bottom:none;
    border-right: 3px solid #3F3B6C;
    font-size:25px;
    margin-right:50px
}
.form-nav{
    display:flex;
}
.form-input{
    display:flex;
}
.row-1{
    width:50%;
}
.row-2{
    width:50%;
    
}

.item{
    display:grid;
    margin-bottom:4%;
}
.h1-font{
    font-weight:normal;
}
.font-form{
    font-weight:normal;
    font-size:30px;
}
.input-form{
    width:50%;
height:45px;
font-size:14px;
}
.select-form{
    width:51%;
height:46px;
font-size:14px;
}
label{
    margin-bottom:5px;
}
.form-buttons{

}
`;