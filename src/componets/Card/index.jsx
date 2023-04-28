import { useState, useEffect } from "react"
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


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const mobile = (width <= 542);

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
    }

    function handlegoAcknowledgment(finish) {
        setAcknowledgment(true)
        setShowForm(false)
        setGoBack(true)
    }





    return (
        <>
            {!mobile ? (
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
            ) :
                <>
                    <SideBar />
                    <div className="card">

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
                </>
            }

        </>
    )
}

export default Card