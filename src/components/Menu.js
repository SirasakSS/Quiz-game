import { useContext } from "react"
import { DataContext } from "../App"

const Menu = ()=>{
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <h1>Quiz game</h1>
            <button onClick={()=>setAppState("quiz")}>เริ่ม...</button>
        </div>
    )
}

export default Menu