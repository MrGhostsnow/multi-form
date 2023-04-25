import { useState } from 'react'
import './styles.css'

function AddOns(props) {

    function handleBackPlans() {
        props.goBack(false);
    }

    const pessoas = [
        { nome: 'João', idade: 30 },
        { nome: 'Maria', idade: 25 },
        { nome: 'Pedro', idade: 40 }
    ];

    const handleChange = (e) => {
        console.log(pessoas[e.target.value]);
    };


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
                    <input onChange={handleChange} type="checkbox" id="scales" name="scales" value={0} />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Online service</label>
                        <label className='subtitleadd' for="scales">Access to multiplayer games</label>
                    </div>
                    <label className='price' for="scales">+$1/mo</label>
                </div>
                <div className='sectionCheckbox'>
                    <input type="checkbox" id="scales" name="scales" />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Larger storage</label>
                        <label className='subtitleadd' for="scales">Extra 1TB of cloud save</label>
                    </div>
                    <label className='price' for="scales">+$2/mo</label>
                </div>
                <div className='sectionCheckbox'>
                    <input type="checkbox" id="scales" name="scales" />
                    <div className='labeladd'>
                        <label className='titleadd' for="scales">Customizable Profile</label>
                        <label className='subtitleadd' for="scales">Custom theme on your profile</label>
                    </div>
                    <label className='price' for="scales">+$2/mo</label>
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