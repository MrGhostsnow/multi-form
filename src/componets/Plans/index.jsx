import './styles.css'
import Arcade from '../../assets/icon-arcade.svg'
import Advanced from '../../assets/icon-advanced.svg'
import Pro from '../../assets/icon-pro.svg'
import { useState } from 'react'

function Plans() {

    const [bg, setBg] = useState(false)
    const [bg1, setBg1] = useState(false)
    const [bg2, setBg2] = useState(false)

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
                    onClick={() => setBg(prev => !prev)}
                    className={bg ? 'plans plansSelected' : 'plans'}>
                    <img src={Arcade} alt="" />
                    <div className='labelPlans'>
                        <p>Arcade</p>
                        <span>$9/mo</span>
                    </div>
                </div>
                <div
                    onClick={() => setBg1(prev => !prev)}
                    className={bg1 ? 'plans plansSelected' : 'plans'}>
                    <img src={Advanced} alt="" />
                    <div className='labelPlans'>
                        <p>Advanced</p>
                        <span>$12/mo</span>
                    </div>
                </div>
                <div
                    onClick={() => setBg2(prev => !prev)}
                    className={bg2 ? 'plans plansSelected' : 'plans'}>
                    <img src={Pro} alt="" />
                    <div className='labelPlans'>
                        <p>Pro</p>
                        <span>$15/mo</span>
                    </div>
                </div>
            </div>
            <div className='selectPeriod'>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default Plans