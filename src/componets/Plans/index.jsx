import './styles.css'
import Arcade from '../../assets/icon-arcade.svg'
import Advanced from '../../assets/icon-advanced.svg'
import Pro from '../../assets/icon-pro.svg'
import { useEffect, useState } from 'react'

function Plans(props) {

    const [bg, setBg] = useState(false)
    const [bg1, setBg1] = useState(false)
    const [bg2, setBg2] = useState(false)
    const [price, setPrice] = useState(false)
    const [haslength, setHasLength] = useState(0)
    const selectedPlan = []

    function handleSelected() {
        if (!bg === true) {
            setBg1(false)
            setBg2(false)
        }
    }

    function handleSelectedBg1() {
        if (!bg1 === true) {
            setBg(false)
            setBg2(false)
        }
    }

    function handleSelectedBg2() {
        if (!bg2 === true) {
            setBg(false)
            setBg1(false)
        }
    }

    function handleClickShowForm() {
        props.goBack(true);
    }


    function handlePeriod() {
        props.pricePeriod(price)
    }

    const service = [
        { type: 'Arcade', price: `${price ? '90/yr' : '9/mo'}` },
        { type: 'Advanced', price: `${price ? '120/yr' : '12/mo'}` },
        { type: 'Pro', price: `${price ? '150/yr' : '15/mo'}` }
    ];


    const handleClick = (e) => {
        selectedPlan.push(service[e])
        props.planOfChoice(selectedPlan)
        setHasLength(selectedPlan.length)
    }

    function handleClickGoNext() {
        if (haslength > 0) {
            props.goNext(true);
        } else {
            window.alert('Escolha uma opção')
        }
    }




    return (
        <div className='containerPlans'>
            <h1>
                Select your plan
            </h1>
            <h4>
                You have the option of monthly or yearly billing.
            </h4>
            <div className='sectionPlans'>
                <div

                    onClick={(e) => {
                        setBg(prev => !prev)
                        handleSelected()
                        handleClick(0)
                    }}

                    className={bg ? 'plans plansSelected' : 'plans'}>
                    <img src={Arcade} alt="" />
                    <div className='labelPlans'>
                        <p>Arcade</p>
                        <span>{price ? '$90/yr' : '$9/mo'}</span>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setBg1(prev => !prev)
                        handleSelectedBg1()
                        handleClick(1)
                    }}
                    className={bg1 ? 'plans plansSelected' : 'plans'}>
                    <img src={Advanced} alt="" />
                    <div className='labelPlans'>
                        <p>Advanced</p>
                        <span>{price ? '$120/yr' : '$12/mo'}</span>
                    </div>
                </div>
                <div
                    value={2}
                    onClick={() => {
                        setBg2(prev => !prev)
                        handleSelectedBg2()
                        handleClick(2)
                    }}
                    className={bg2 ? 'plans plansSelected' : 'plans'}>
                    <img src={Pro} alt="" />
                    <div className='labelPlans'>
                        <p>Pro</p>
                        <span>{price ? '$150/yr' : '$15/mo'}</span>
                    </div>
                </div>
            </div>
            <div className='selectPeriod'>
                <label class="switch">
                    <input
                        onClick={() => {
                            setPrice(prev => !prev)
                            handlePeriod()
                        }} type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className='containerButtons'>
                <button onClick={(e) => handleClickShowForm()} className='back'>Go Back</button>
                <button onClick={(e) => handleClickGoNext()} className='next'>Next Step</button>
            </div>
        </div>
    )
}

export default Plans