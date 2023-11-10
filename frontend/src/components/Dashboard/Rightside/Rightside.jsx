import React from 'react'
import './Rightside.css'

import Updates from '../Updates/Updates'

import CustomerReviews from '../Student_Reviews/StudentR'
function Rightside() {
  return (
    <div className='Rightside'>
     <div className='Updates'>
      
     <Updates/>
      </div>
      <div className='Studentreview'>
<CustomerReviews/>
        </div>
    </div>
  )
}
export default Rightside
