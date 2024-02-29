import React from 'react'
import { categories } from '../../constants/constants'
import './categories.css'
const Categories = () => {
  return (
    <div className='categories-container'>
      
            {categories.map((item, idx)=>{
                return(
                    <div className='items' key={idx}>{item}</div>
                )
            })}
        
       
    </div>
  )
}

export default Categories