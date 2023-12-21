import React from 'react'

function BottomCard({caption,heading,description,button,usernum,storagenum,support,details}) {
  return (
    <div className='BottomCard'>
        <div className='first'>
            <button className='caption'>
                {caption}
            </button>
            <div>
                <h2>{heading}</h2>
            </div>
            <div>
                {description}
            </div>
            <button className='button' style={{backgroundColor:'#b2ff9e',border:'#ffff',borderRadius:'5px',marginTop:'20px'}}>{button} <i class="fa-solid fa-arrow-right-long"></i></button> 
        </div>
         <div className='second'>
         <p>What you'll get:</p>
        <div className='features'>
            <div className='feature-item'>
            <i class="fa-regular fa-user"></i>
            <span>{usernum} Users</span>
            </div>
            {storagenum&&(
            <div className='feature-item'>
           <i class="fa-solid fa-cloud-arrow-up"></i>
            <span>Upto {storagenum}gb Storage</span>
            </div>
            )}
           {support&&(
            <div className='feature-item'>
            <i class="fa-regular fa-envelope"></i>
            <span>{support} Support</span>
            </div>
            )}
            <div className='feature-item'>
            <i class="fa-solid fa-check-double"></i>
            <span>{details} </span>
            </div>
        </div>
         </div>
    </div>
  )
}

export default BottomCard