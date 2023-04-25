import { useState } from "react"
import AddOns from "../AddOns"
import Form from "../Form"
import Plans from "../Plans"
import SideBar from "../SideBar"
import "./styles.css"

function Card() {

    const [showForm, setShowForm] = useState(true)
    const [goBack, setGoBack] = useState(false)
    const [goNext, setGoNext] = useState(false)

    function handleShowForm(dados) {
        setShowForm(dados);
        setGoBack(false)
        setGoNext(false)
        console.log("showform", showForm)
    }

    function handleGoBack(back) {
        setGoBack(back)
        setGoNext(prev => !prev)
        console.log("goback", goBack)
    }

    function handleNext(next) {
        setGoNext(next)
        setGoBack(false)
        setShowForm(false)
        console.log("form", showForm)
        console.log("back", goBack)
    }



    return (
        <div className="card">
            <SideBar />
            {showForm || goBack ? (
                <Form showForm={handleShowForm} />
            ) : (
                <>
                    {!goNext ? (
                        <Plans
                            goBack={handleGoBack}
                            goNext={handleNext} />

                    ) :

                        <AddOns
                            goBack={handleGoBack} />}
                </>
            )}
        </div>
    )
}

export default Card