import React, {Component} from 'react';

export default class Create extends Component{
    render(){
        return(
            
            <div className ="App" >
              <div class="main">
                <section class="signup">
                  <div class="container">
                    <div class="signup-content">
                     <h3> Create Your Profile</h3>

                     <form>
                   <div className = "form-group">
                       <label> Planner Name: </label>
                       <input type="text" className = "form-control"/>
                   
                   </div>

                   <div className = "form-group">
                       <label>Party Category:</label>
                       <input type="text" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <label>Contact No: </label>
                       <input type="text" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <label>Address: </label>
                       <input type="text" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <label>Specialities: </label>
                       <input type="text" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <label>Previous works: </label>
                       <input type="textarea" className = "form-control"/> 
                        
                   </div>

                   <div className = "form-group">
                       <input type="Submit" value = "Create Profile" 
                          className = "btn btn-primary"/>
                   </div>
               </form>
            

                     </div>
                   </div>
               </section>
              </div>
          </div>
                
           
        );
    }
}