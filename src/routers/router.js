import React from 'react'
import {Routes, Route} from "react-router"
import Main from "../Page/Main"
import Todo from "../Page/Todo"
function router() {
    return (
        <>
            <Routes>
                <Route exact path ="/"element={<Main/>}/>
                <Route exact path ="/detail"element={<Todo/>}/>

            </Routes>
        </>
    )
}

export default router
