import { useState } from 'react';
import './styles.css'

function Form(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function handleClick() {
        if (name && email && phone !== '') {
            props.showForm(false);
        } else {
            window.alert('Preencha todos os campos')
        }
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    return (
        <div className='containerForm'>
            <h1>
                Personal Info
            </h1>
            <h4>
                Please provide you name, email address, and phone number.
            </h4>
            <div className='sectionInput'>
                <form className='form'>
                    <label>
                        Name
                        <input onChange={handleChangeName} type="text" name="name" value={name} />
                    </label>
                    <label>
                        Email Address
                        <input onChange={handleChangeEmail} type='email' name='email' value={email} />
                    </label>
                    <label>
                        Phone Number
                        <input onChange={handleChangePhone} type='phone' name='phone' value={phone} />
                    </label>
                    <input onClick={(e) => {
                        e.preventDefault()
                        handleClick()
                    }} className='button' type="submit" value={'Next Step'} />
                </form>

            </div>
        </div>
    )
}

export default Form