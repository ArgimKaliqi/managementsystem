import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { ClientForm } from "./ClientForm";

export const Clients =()=>{
const[clientForm, setClientForm]=useState(false);
if(clientForm) return <ClientForm/>
    return(
        <ClientsCSS>
            <section className="clients-section">
            <section className="section-header">
                <div className="col-1">
                    <div>
                    <input type="text" className="search-input" />
                    <button className="search-button"><BsSearch/></button>
                    </div>
                </div>
                <div className="col-2">
                <button onClick={()=>setClientForm(true)} className="createNew-button">Create New</button>
                </div>
            </section>
            <section className="clients-data">
              <ul className="data-nav">
                <li className="item">Name</li>
                <li className="item">Nachname</li>
                <li className="item">Stadt</li>
                <li className="item">Email</li>
              </ul>
              <section className="row-container">
                <ul className="row-first">
                <li className="response-item">Dalma</li>
                </ul>
                <ul className="row-second">
                <li className="response-item">Smaka</li>
                </ul>
                <ul className="row-third">
                <li className="response-item">Bllagaje</li>
                    </ul>
                <ul className="row-fourth">
                <li className="response-item">smakadalma@gmail.com</li>
                </ul>
                {/* <ul className="row-fifth">
                <li className="item">Name</li>
                </ul> */}
              </section>
            </section>
            </section>
            
        </ClientsCSS>

    )
}
const ClientsCSS = styled.div`
.row-container{
    display:flex;
    border-bottom:1px solid #3F3B6C;
   
    
}
.row-first{
    width:15%;
    list-style-type: none;
}
.row-second{

    width:15%;
    list-style-type: none;

}
.row-third{
    
    list-style-type: none;
    width:15%;
}
.row-fourth{
    list-style-type: none;
    width:20%;
}
.row-fifth{
    list-style-type: none;
    width:0%;
}

.clients-section{
    margin:5%;
}
.section-header{
display:flex;

height:50px;
}
.col-1{
    width:50%;
}
.col-2{
    width:50%;
    
}

.search-input{
width:40%;
height:45px;
font-size:14px;


}
.search-button{
    width: 10%;
    height:50px;
    background-color:#3F3B6C;
    border: none;
    color: white;
    cursor: pointer;
    padding:0px;
    border:none;
    border:10px solid #3F3B6C
}
.createNew-button{
    width: auto;
    height:50px;
    background-color:white;
    border-color:#3F3B6C;
    color:#3F3B6C;
    position:absolute;
    margin-left:35%;
    font-size:16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}


.data-nav{
    display:flex;
    list-style-type: none;
    border-bottom: 3px solid #3F3B6C;
    
}
.data-response{
    display:flex;
    list-style-type: none;
    
}
.response-item{
    font-size:16px;
   
}
.item{
    margin:5% 15% 1% 0%;
    font-size:20px
}

`;
