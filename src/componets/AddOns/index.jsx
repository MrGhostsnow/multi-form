import { useState } from 'react'
import './styles.css'

function AddOns(props) {

    const [period, setPeriod] = useState(props.selectPrice)
    const [haslength, setHasLength] = useState(0)
    const chosseservice = []

    function handleBackPlans() {
        props.goBack(false);
    }

    const service = [
        { type: 'Online service', price: `${period ? '1/mo' : '10/yr'}` },
        { type: 'Larger storage', price: `${period ? '2/mo' : '20/yr'}` },
        { type: 'Customizable Profile', price: `${period ? '2/mo' : '20/yr'}` }
    ];


    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    }

    const handleClick1 = () => {
        setIsChecked1(!isChecked1);
    }

    const handleClick2 = () => {
        setIsChecked2(!isChecked2);
    }

    //achar uma forma de separar os checkbox

    const handleChange = (e) => {
        if (!isChecked === true) {
            let services = (service[e.target.value])
            chosseservice.push(services)
            setHasLength(chosseservice.length)
            handleSelectedAdd()
        }
        else {
            chosseservice.push('')
            handleSelectedAdd()
        }
    };

    const handleChange1 = (e) => {
        if (!isChecked1 === true) {
            let services = (service[e.target.value])
            chosseservice.push(services)
            setHasLength(chosseservice.length)
            handleSelectedAdd()
        } else {
            chosseservice.push('')
            handleSelectedAdd()
        }
    };

    const handleChange2 = (e) => {
        if (!isChecked2 === true) {
            let services = (service[e.target.value])
            chosseservice.push(services)
            setHasLength(chosseservice.length)
            handleSelectedAdd()
        } else {
            chosseservice.push('')
            handleSelectedAdd()
        }
    };



    function handleSelectedAdd() {
        props.addOfChoice(chosseservice);
    }

    function handleGoNext() {
        if (haslength > 0) {
            props.goSummary(true);
        } else {
            window.alert('Escolha uma opção')
        }
    }

    // console.log(isChecked1)
    // console.log(isChecked2)



    return (
        <div className='containerAddOns'>
            <h1>
                Pick add-ons
            </h1>
            <h4>
                Add-ons help enhance your gaming experience.
            </h4>
            <div className='containerCheckbox'>
                <div className='sectionCheckbox'>
                    <input onClick={handleClick} onChange={handleChange} checked={isChecked} type="checkbox" id="scales" name="scales" value={0} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Online service</label>
                        <label className='subtitleadd' for="scales">Access to multiplayer games</label>
                    </div>
                    <label className='price' for="scales">{period ? '+$1/mo' : '+$10/yr'}</label>
                </div>
                <div className='sectionCheckbox'>
                    <input onClick={handleClick1} onChange={handleChange1} type="checkbox" id="scales" name="scales" value={1} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Larger storage</label>
                        <label className='subtitleadd' for="scales">Extra 1TB of cloud save</label>
                    </div>
                    <label className='price' for="scales">{period ? '+$2/mo' : '+$20/yr'}</label>
                </div>
                <div className='sectionCheckbox'>
                    <input onClick={handleClick2} onChange={handleChange2} type="checkbox" id="scales" name="scales" value={2} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Customizable Profile</label>
                        <label className='subtitleadd' for="scales">Custom theme on your profile</label>
                    </div>
                    <label className='price' for="scales">{period ? '+$2/mo' : '+$20/yr'}</label>
                </div>
            </div>
            <div className='containerButtons'>
                <button onClick={() => handleBackPlans()} className='back'>Go Back</button>
                <button onClick={() => handleGoNext()} className='next'>Next Step</button>
            </div>
        </div>
    )
}

export default AddOns