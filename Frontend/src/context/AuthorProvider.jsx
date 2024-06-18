import React, { createContext, useContext, useState } from 'react'

export const AuthorContext = createContext()
export default function AuthorProvider({children}) {
   const initialAuthorUser = localStorage.getItem("Users");

   const [authorUser, setAuthorUser] = useState(
    initialAuthorUser? JSON.parse(initialAuthorUser) : undefined
   )

   return (
    <AuthorContext.Provider value={[authorUser, setAuthorUser]}>
        {children}
    </AuthorContext.Provider>
   )
}

export const useAuthor = () => useContext(AuthorContext);