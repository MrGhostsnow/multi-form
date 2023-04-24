import './styles.css'

function Form(props) {


    function handleClick() {
        props.showForm(false);
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
                        <input required type="text" name="name" />
                    </label>
                    <label>
                        Email Address
                        <input required type='email' name='email' />
                    </label>
                    <label>
                        Phone Number
                        <input required type='phone' name='phone' />
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