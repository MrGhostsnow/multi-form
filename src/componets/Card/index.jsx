import { useState } from "react"
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
        setGoNext(false)
    }

    function handelChangePrice(price) {
        setPricePeriod(price)
    }


    // console.log("plan", planOfChoice)
    console.log("add", addOfChoice)





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
                                        chooseAdd={addOfChoice} />
                                )}
                        </>
                    )}

                </>
            )

            }
        </div>
    )
}

export default Card