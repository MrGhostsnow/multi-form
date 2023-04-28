import "./styles.css"
import background from '../../assets/bg-sidebar-desktop.svg'
import backgroundMobile from '../../assets/bg-sidebar-mobile.svg'
import { useState, useEffect } from "react"

function SideBar() {

    const [selected, setSelected] = useState(false)

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    const mobile = (width <= 542);

    return (
        <div className="sideBar">
            <img src={!mobile ? background : backgroundMobile} alt='background' />
            <section className="containerSteps">
                <div className="steps">
                    <span style={selected ? { backgroundColor: '#BFE2FD', color: 'black', border: 'none' } : { backgroundColor: "transparent" }}>1</span>
                    <div className="stepsLabel" >
                        <p className="title">STEP 1</p>
                        <p className="label">YOUR INFO</p>
                    </div>
                </div>
                <div className="steps">
                    <span style={selected ? { backgroundColor: '#BFE2FD', color: 'black', border: 'none' } : { backgroundColor: "transparent" }}>2</span>
                    <div className="stepsLabel" >
                        <p className="title">STEP 2</p>
                        <p className="label">SELECT PLAN</p>
                    </div>
                </div>
                <div className="steps">
                    <span style={selected ? { backgroundColor: '#BFE2FD', color: 'black', border: 'none' } : { backgroundColor: "transparent" }}>3</span>
                    <div className="stepsLabel" >
                        <p className="title">STEP 3</p>
                        <p className="label">ADD-ONS</p>
                    </div>
                </div>
                <div className="steps">
                    <span style={selected ? { backgroundColor: '#BFE2FD', color: 'black', border: 'none' } : { backgroundColor: "transparent" }}>4</span>
                    <div className="stepsLabel" >
                        <p className="title">STEP 4</p>
                        <p className="label">SUMMARY</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SideBar