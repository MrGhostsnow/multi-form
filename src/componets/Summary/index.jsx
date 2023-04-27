import './styles.css'
import { useState } from "react"

function Summary(props) {

    const [plan, setPlan] = useState([props.choosePlan])
    const [add, setAdd] = useState([props.chooseAdd])


    console.log("choicep", plan)
    console.log("choicea", add)

    return (
        <div className='containerSummary'>
            <h1>
                Finishing up
            </h1>
            <h4>
                Double-check everything looks OK before confirming.
            </h4>
            <div className='sectionDetails'>
                <div className='sectionTitle'>
                    {plan.map((plan) => (
                        <>
                            <div className='titleDetails'>
                                <p>{plan[0].type}</p>
                            </div>
                            <span>{plan[0].price}</span>
                        </>
                    ))}
                </div>
                <span className='divider' />
                {add.map((add) => (
                    <div className='serviceDetails'>
                        <p>{add[0].type}</p>
                        <span>{add[0].price}</span>
                    </div>
                ))}
            </div>
            <div className='total'>
                <p>Total</p>
                <span></span>
            </div>
        </div>
    )
}

export default Summary