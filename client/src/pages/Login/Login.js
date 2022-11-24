import React from "react";
import styled from "styled-components";
import loginbg from '../../assets/purple.jpg'
import { BiUserCircle } from 'react-icons/bi'

const LoginForm = () => {
  return (
    <Login>
      <section>
      <img className="background-image" src={loginbg}></img>
        <div className="login">
          <div className="col-1">
           <i><BiUserCircle /></i>
            <h2>Welcome</h2>
            <span>Login to countinue</span>

            <form id="form" className="flex flex-col">
              <input type="text" placeholder="Email"></input>
              <input type="text" placeholder="Password"></input>

              <button className="btn">Login</button>
            </form>
          </div>
        </div>
      </section>
    </Login>
  );
};

const Login = styled.div`

.background-image {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: brightness(0.3);
  object-fit: cover;
}
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
  }

  .login {
    color: white;
    border-radius: 20px;
    max-width: 700px;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border: none;
    background: transparent;
    box-shadow: 0px 0px 10px 1px black;
    backdrop-filter: blur(20px);
  }
  i{
    color: white;
    font-size: 50px;
  }
  h2{
    color: white;
  }

  .login span {
    color: white;
  }

  #form {
    max-width: 320px;
    width: 100vw;
    margin: 2em auto;
  }

  #form > input,
  .btn {
    border: none;
    padding: 0.9em 1em;
  }
  #form input {
    border-bottom: 1px solid black;
    border-radius: 10px;
  }

  #form > input:focus {
    outline: none;
  }

  #form > .btn {
    background-color: #3F3B6C;
    color: #e9ecef;
    font-size: 1em;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      transition: 0.2s;
      filter: brightness(0.8);
    }
  }

  .flex {
    display: flex;
    gap: 1em;
  }

  .flex-col {
    flex-direction: column;
  }

  .login .col-1 {
    margin: auto;
    padding: 3em 0;
  }

  @media screen and (min-width: 860px) {
    .login .col-2 img {
      display: initial;
    }
  }
`;
export default LoginForm;
