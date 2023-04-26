import { useState } from 'react'
import './styles.css'

function AddOns(props) {

    const [period, setPeriod] = useState(props.selectPrice)
    const chosseservice = []

    function handleBackPlans() {
        props.goBack(false);
    }

    const service = [
        { type: 'Online service', price: `${period ? '+$1/mo' : '+10/yr'}` },
        { type: 'Larger storage', price: `${period ? '+$2/mo' : '+20/yr'}` },
        { type: 'Customizable Profile', price: `${period ? '+$1/mo' : '+10/yr'}` }
    ];


    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    }

    //achar uma forma de separar os checkbox

    const handleChange = (e) => {
        if (isChecked === true) {
            let services = (service[e.target.value])
            chosseservice.push(services)
            handleSelectedAdd()
        }
    };

    function handleSelectedAdd() {
        props.addOfChoice(chosseservice);
    }




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
                    <input onClick={handleClick} onChange={handleChange} type="checkbox" id="scales" name="scales" value={0} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Online service</label>
                        <label className='subtitleadd' for="scales">Access to multiplayer games</label>
                    </div>
                    <label className='price' for="scales">{period ? '+$1/mo' : '+10/yr'}</label>
                </div>
                <div className='sectionCheckbox'>
                    <input onClick={handleClick} onChange={handleChange} type="checkbox" id="scales" name="scales" value={1} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Larger storage</label>
                        <label className='subtitleadd' for="scales">Extra 1TB of cloud save</label>
                    </div>
                    <label className='price' for="scales">{period ? '+$2/mo' : '+20/yr'}</label>
                </div>
                <div className='sectionCheckbox'>
                    <input onClick={handleClick} onChange={handleChange} type="checkbox" id="scales" name="scales" value={2} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Customizable Profile</label>
                        <label className='subtitleadd' for="scales">Custom theme on your profile</label>
                    </div>
                    <label className='price' for="scales">{period ? '+$2/mo' : '+20/yr'}</label>
                </div>
            </div>
            <div className='containerButtons'>
                <button onClick={() => handleBackPlans()} className='back'>Go Back</button>
                <button className='next'>Next Step</button>
            </div>
        </div>
    )
}

export default AddOns