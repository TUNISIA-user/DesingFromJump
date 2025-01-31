import React, { useEffect, useRef, useState } from 'react'
import Header from './Header/Header'
import "./jump.css"
const Jump = () => {
    const data = useRef(null)

    useEffect(()=>{
  
      for(let i =0 ;i<600;i++){
    
        setTimeout(()=>{
          data.current.textContent=Number(data.current.textContent)+1 || 0
        },i*10)   
      }
    },[])
  return (

    <>  
    <div className='containe_Header_jump'>
        <Header/>
        
        <div className='jump_inforamtion'>
           
             <div className="logo">
              <h1>Jump</h1>
              <img   src='./first_view_images/crow.svg' alt=''/>
             </div>
        <div className="connected_users"><h2>161,718,588,<h2 ref={data} ></h2></h2></div>
        <div className='numbers_matches'><h2>Number  of Matches</h2></div>
                  
                  
          <div className='Button_jump'>
          <div className='App_store_button'>
            <img src='./first_view_images/apple.svg' alt=''/>
            <h4>App Store</h4>
            </div>
            <div className='App_store_button'>
            <img src='./first_view_images/app-store.svg' alt=''/>
            <h4>App Store</h4>
            </div>

          </div>







           </div>

           
         
    
    </div>


    <div className='containe_Header_jump_black'></div>
    
     </>
  )
}

export default Jump
