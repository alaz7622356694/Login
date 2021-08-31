import React from 'react'
import './RegistrationForm.css'
import {Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const RegistrationForm = () => {
    const history = useHistory();
    return (
   <div>  
       < button className='btn' onClick={() => history.push('/')}>Go back</button>
 <div className='formBox'>  

<div>
<form >
<h2>Let's Create your credentials</h2>
       
       <fieldset>
       <legend>
       Create an account using</legend>
       <a href="#" className="fa fa-facebook"></a>
       <a href="#" className="fa fa-twitter"></a>
       <a href="#" className="fa fa-instagram"></a>
       <a href="#" className="fa fa-google"></a>
       
       </fieldset>
<fieldset>
<legend>Your Name</legend>
<input type="text" id="fname" name="fname"></input> 
</fieldset>
<fieldset>
<legend>Email</legend>
<input type="email" id="email" name="email"></input>
</fieldset>
<fieldset>
<legend>Password</legend>
<input type="password"  name="password"></input>
</fieldset>
<fieldset>
<legend>Re-enter password</legend>
<input type="password"  name="password"></input>
</fieldset>
<fieldset>
<legend>BirthDate</legend>
<input type="date" id="birthday" name="birthday"></input>
</fieldset>
<fieldset>
<legend>Gender</legend>
<label>Male</label>
<input type="checkbox"  name="checkbox"></input>
<label >Female</label>
<input type="checkbox"  name="checkbox"></input>
</fieldset>



</form>

</div>
  
<button className='btn'>Register</button>

<div><label>Already have an account? </label> <Link to='/LoginForm'>Sign-In</Link></div>

   </div>
    
   
  </div>

 
      
    )
}

export default RegistrationForm


