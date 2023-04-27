import { useState } from "react"
import Acknowledgment from "../Acknowledgment"
import AddOns from "../AddOns"
import Form from "../Form"
import Plans from "../Plans"
import SideBar from "../SideBar"
import Summary from "../Summary"
import "./styles.css"

function Card() {

    const [showForm, setShowForm] = useState(true)
    const [goBack, setGoBack] = useState(false)
    const [goNext, setGoNext] = useState(false)
    const [goSummary, setGoSummary] = useState(false)
    const [acknowledgment, setAcknowledgment] = useState(false)
    const [pricePeriod, setPricePeriod] = useState(true)
    const [planOfChoice, setPlanOfChoice] = useState()
    const [addOfChoice, setAddOfChoice] = useState()

    function handleShowForm(dados) {
        setShowForm(dados);
        setGoBack(false)
        setGoNext(false)
    }

    function handleGoBack(back) {
        setGoBack(back)
        setGoNext(prev => !prev)
    }

    function handleNext(next) {
        setGoNext(next)
        setGoBack(false)
        setShowForm(false)
    }

    function handleGoSummary(summary) {
        setGoSummary(summary)
        setGoBack(false)
        setShowForm(false)
        setGoNext(true)
    }

    function handelChangePrice(price) {
        setPricePeriod(price)
    }

    function handleBackAdd(backadd) {
        setGoSummary(backadd)
        // setGoBack(false)
        // setShowForm(false)
        // setGoNext(true)
    }

    function handlegoAcknowledgment(finish) {
        setAcknowledgment(true)
        setShowForm(false)
        setGoBack(true)
    }

    console.log("back", goBack)
    console.log("next", goNext)
    console.log("summ", goSummary)



    return (
        <div className="card">
            <SideBar />
            {!acknowledgment ? (
                <>
                    {showForm || goBack ? (
                        <Form showForm={handleShowForm} />
                    ) : (
                        <>
                            {!goNext ? (
                                <Plans
                                    goBack={handleGoBack}
                                    goNext={handleNext}
                                    pricePeriod={handelChangePrice}
                                    planOfChoice={(plan) => setPlanOfChoice(plan)} />

                            ) : (

                                <>
                                    {!goSummary ? (
                                        <AddOns
                                            goBack={handleGoBack}
                                            goSummary={handleGoSummary}
                                            selectPrice={pricePeriod}
                                            addOfChoice={(add) => setAddOfChoice(add)} />
                                    ) :
                                        (
                                            <Summary
                                                choosePlan={planOfChoice}
                                                chooseAdd={addOfChoice}
                                                selectPrice={pricePeriod}
                                                goSummary={handleBackAdd}
                                                acknowledgment={handlegoAcknowledgment}
                                            />
                                        )}
                                </>
                            )}

                        </>
                    )
                    }
                </>
            ) :
                <Acknowledgment />
            }
        </div>
    )
}

export default Card