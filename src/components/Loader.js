import React, { useState } from 'react'
import loader from '../images/loading.gif'

const Loader = ({load}) => {
   
  return (<div>
    {!load && <img src={loader} className='absolute left-1/2 top-1/2 mix-blend-darken z-100'/>}
    </div>
  )
}

export default Loader