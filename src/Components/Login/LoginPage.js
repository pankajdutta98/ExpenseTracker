import React from "react";
import NewExpense from "../NewExpenses/NewExpense";
import "./LoginPage.css";

const submitHandler = () => {

}

function LoginPage() {
  return (
    <div className="loginStyle">
      <div className="headLine">
        <h1>Track & Manage Your Daily Expenses</h1>
        <p>"Kuch Sasta Sa Quote Likhna Hai Idhar :P :P"</p>
        <p style={{marginRight: "100px", textAlign:"right"}}>-Charsilal</p>
      </div>
      <div className="login-container">
        <h2 style = {{textAlign: "center", color:"#3407b1"}}>LogIn</h2>
        <form className="login-form" onSubmit={submitHandler}>
          <input type="text" placeholder="Username" id="username" required />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
          <p>
            Don't have an account? <a href="www.google.com">Sign Up</a>
          </p>
          <button type="submit" >LogIn</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
