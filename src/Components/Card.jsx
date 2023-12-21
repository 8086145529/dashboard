import React from 'react'

function Card({title,prevplan,currplan,usernum,storagenum,support}) {
  return (
    <div className='card'>
        <div>
            <h2 style={{fontSize:'2rem'}}>{title}</h2>
            <p style={{ textDecoration: "line-through",
      color: "red"}}>{prevplan}</p>
            <h2 style={{fontSize:'2rem',fontWeight:'500'}}>{currplan}</h2>
            <button className='button' style={{backgroundColor:'violet'}}>Get Started <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
        {/* Horizontal line*/}
        <div className='line'>
        </div>
        <p>What you'll get:</p>
        <div className='features'>
            <div className='feature-item'>
            <i class="fa-regular fa-user"></i>
            <span>Upto {usernum} Users</span>
            </div>
            <div className='feature-item'>
           <i class="fa-solid fa-cloud-arrow-up"></i>
            <span>Upto {storagenum}gb Storage</span>
            </div>
            <div className='feature-item'>
            <i class="fa-regular fa-envelope"></i>
            <span>{support} Support</span>
            </div>
        </div>
        <div>
            <h3 style={{textDecoration:'underline',marginLeft:'25px',cursor:'pointer'}}>EXPLORE FEATURES</h3>
        </div>
    </div>
  )
}

export default Card