import React, { createContext, useState } from 'react'

export const Context = createContext()

export default function GlobalContextProvider(props) {

  const [UserData, setUserData] = useState({
    // DUMMY DATA
    name: 'user',
    email: 'user@gmail.com',
    password: 'helloworld',
    authtoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  })

  return (
    <Context.Provider value={{ UserData, setUserData }}>
      {props.children}
    </Context.Provider>
  )
}
