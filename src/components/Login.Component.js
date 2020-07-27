import React, {Component} from 'react';



export default class Login extends Component{
    render(){
        return(
            <div className ="App">
             
              <form class="form-signin">
           {/* <img class="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
               <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
             
             
                <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
            
       
           <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
           <p class="loginhere">
            Don't have an account ?<a href="#" class="loginhere-link">Register</a>
        </p>
           </form>
        </div>
    
        );
    }
    

}
