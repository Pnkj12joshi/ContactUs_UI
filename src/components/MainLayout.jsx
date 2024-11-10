import React, { useState } from 'react'
import "../../src/Sass/main.scss";
import lady from "../images/lady.png";
const MainLayout = () => {

  const [name,setname] = useState("");
  const[email,setemail]= useState("");
  const[text,settext] = useState("");
  const handlesubmit =(e)=>{
   e.preventDefault();
   console.log(`name is ${name} email is ${email} text is ${text}`);
   setname("");
  setemail("");
  settext("");
  }
 
  return (
    <div className='mainbody'>
     <h1> CONTACT US</h1>
     <p> ET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    <div className='layoutform'>
      <div> 
        <div className='btndiv'>
        <div>   <div className='content'> support chat</div></div>
        <div>   <div className='content'>via call</div> </div>
        </div>
        <div className='layoutformtwo'>
          <div> VIE EMAIL FORM</div>
        </div>
        <div className='formdiv'>
        <form onSubmit={handlesubmit}>
          <input type="text" label="Name" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}/> 
          <input type="text" label="E-mail" placeholder='E-mail' value={email} onChange={(e)=>setemail(e.target.value)} /> 
          <textarea label="TEXT" placeholder='TEXT' value={text} onChange={(e)=>settext(e.target.value)} />
          <button style={{cursor:"pointer"}}> SUBMIT</button>
        </form>
        </div>
       
        
      </div>
      <div className='imagediv'>
        <img src={lady} alt='lady'/>
      </div>
    </div>
    </div>
  )
}

export default MainLayout
