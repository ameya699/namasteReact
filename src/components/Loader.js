import React, { useState } from 'react'
import loader from '../images/loading.gif'

const Loader = ({load}) => {
   
  return (<div>
    {!load && <img src={loader} className='loaderClass'/>}
    </div>
  )
}

export default Loader