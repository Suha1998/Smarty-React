import React, {Component} from 'react';

export default class Register extends Component{
    render(){
        return(
    <div className ="App">
     <div class="main">
      <section class="signup">

        <div class="container">
          < div class="signup-content">
           <form method="POST" id="signup-form" class="signup-form">
            <h2 class="form-title">Create account</h2>
           <div class="form-group">
            <input type="text" class="form-input" name="name" id="name" placeholder="Your Name" />
         </div>
         <div class="form-group">
            <input type="email" class="form-input" name="email" id="email" placeholder="Your Email" />
         </div>
        <div class="form-group">
           <input type="text" class="form-input" name="password" id="password" placeholder="Password" />
           <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
       </div>
        <div class="form-group">
            <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password" />
       </div>
      
       <div class="form-group">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
       </div>
        </form>
        <p class="loginhere">
         Have already an account ? <a href="#" class="loginhere-link">Login here</a>
        </p>
       </div>
      </div>
     </section>
    </div>
              
 </div>
    
        );
    }
    
}