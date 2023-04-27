import './styles.css'

import Thanks from '../../assets/icon-thank-you.svg'

function Acknowledgment() {
    return (
        <div className='containerAcknowledgment'>
            <img src={Thanks} alt='icon' />
            <h1> Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please fell free to email us at support@lorem.com</p>
        </div>
    )
}

export default Acknowledgment