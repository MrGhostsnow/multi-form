import { useState } from "react"
import Form from "../Form"
import SideBar from "../SideBar"
import "./styles.css"

function Card() {

    const [showForm, setShowForm] = useState(true)
    function handleShowForm(dados) {
        setShowForm(dados);
        console.log(showForm)
    }

    return (
        <div className="card">
            <SideBar />
            {showForm && (
                <Form showForm={handleShowForm} />
            )}
        </div>
    )
}

export default Card