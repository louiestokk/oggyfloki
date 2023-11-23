import React from 'react'


const ErrorPage = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'2rem'}}>
        <h1 style={{color:'yellow'}}>This was a rong turn</h1>
        <a href={'/'} style={{border:'1px solid purple',fontSize:'1.4rem',padding:'1rem',marginTop:'1rem',borderRadius:'5px'}}>Back Home</a>
    </div>
  )
}

export default ErrorPage