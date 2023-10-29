import React from 'react'
import styles from "../styles/First.module.css"
import Nav from './Nav'

const First = ({children}) => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
    <Nav></Nav>
    <div>
        <h1 className={styles.just}>Hello</h1>
        {children}
    </div>
    </>
    
  )
}

export default First 