import React from 'react'
import './MainPage.css'
import { useHistory } from 'react-router-dom';
const MainPage = () => {
    const history = useHistory();
    return (
        <div className='main'>
           <div>

           <button className='btn' onClick={() => history.push('/RegistrationForm')}>Sign-Up</button>
           <button className='btn' onClick={() => history.push('/LoginForm')}>Sign-In</button>

           </div>
          <br/>
           <div className='img'>
               
                </div>
                <br/>

            <div className='textBox'>
                <p>
                    <h2>This portfolio consists of two forms for login and registration</h2>
                    <h3>A creative and attractive login page will quickly catch the user’s attention, direct a high volume of visitors to your website, and increase the customer base. Most login pages include elements such as username, password, and a highlighted CTA.</h3>
                </p>
            </div>
<br/>
            <div className='textBox'>
               <h3>Designed by Alireza Azari</h3>
            </div>
            <br/>
            
           

        </div>
    )
}

export default MainPage
