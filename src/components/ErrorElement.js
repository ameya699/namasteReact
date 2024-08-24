import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const error=useRouteError();
  return (
    <div>
        <h2>Oops!</h2>
        <h3>Something went wrong</h3>
        <h4>{error.status} : {error.message}</h4>
    </div>
  )
}

export default ErrorElement