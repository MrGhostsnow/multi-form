import './styles.css'
import { useState } from "react"

function Summary(props) {

    const [plan, setPlan] = useState([props.choosePlan])
    const [add, setAdd] = useState([props.chooseAdd])
    const [period, setPeriod] = useState(props.selectPrice)

    function handleBackAdd() {
        props.goSummary(false);
    }

    function handleFinish() {
        props.acknowledgment(true);
    }

    const pricePlan = plan.map(function (elemento) {
        return elemento[0].price;
    });

    const priceAdd = add.map(function (elemento) {
        return elemento[0].price;
    });

    const pricePlanInt = (parseInt(pricePlan[0]))
    const priceAddInt = (parseInt(priceAdd[0]))


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
                                <p>{plan[0].type} {period ? '(Monthly)' : '(Yearly)'}</p>
                            </div>
                            <span>+${plan[0].price}</span>
                        </>
                    ))}
                </div>
                <span className='divider' />
                {add.map((add) => (
                    <div className='serviceDetails'>
                        <p>{add[0].type}</p>
                        <span>+${add[0].price}</span>
                    </div>
                ))}
            </div>
            <div className='total'>
                <p>Total {period ? '(per month)' : '(per year)'}</p>
                <span>{`+$${pricePlanInt + priceAddInt} ${period ? '/mo' : '/yr'}`}</span>
            </div>
            <div className='containerButtons'>
                <button onClick={() => handleBackAdd()} className='back'>Go Back</button>
                <button onClick={() => handleFinish()} className='next'>Confirm</button>
            </div>
        </div>
    )
}

export default Summary