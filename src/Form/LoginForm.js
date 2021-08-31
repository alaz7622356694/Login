import React from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const LoginForm = () => {
    const history = useHistory();
    return (
        <div>
        < button className='btn' onClick={() => history.push('/')}>Go back</button>
        <div className='login'>
<form className='form'>
<h2>Login</h2>
<fieldset>
<legend>Email</legend>
<input type="email" id="email" name="email"></input>
</fieldset>
<fieldset>
<legend>Password</legend>
<input type="password"  name="password"></input>
</fieldset>


<div>
<button className='btn'>Login</button>
<input  type='checkbox'></input><label>Remember Me</label>

</div>
<hr/>
<div><label>Don't have an account? </label> <Link to='/RegistrationForm'>Sign-Up</Link></div>
<hr/>
</form>


 

        </div>
        </div>

    )
}

export default LoginForm
