
import { useState } from "react"
import Dashboard from "./app/dashboard/page"
import Login from "./app/login/page"


const App = () => {
  const [isUserAuth, setIsUserAuth] = useState(false)
  return (
    <>
      {isUserAuth ? <Dashboard /> : <Login />}
    </>
  )
}

export default App