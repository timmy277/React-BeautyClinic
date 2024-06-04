import Question from "../About/Components/Question"
import Consultation from "./Components/Consultation"
import OurService from "./Components/OurService"
import Product from "./Components/Product"
import Treatment from "./Components/Treatment"
import TreatmentVideo from "./Components/TreatmentVideo"


const Service = () => {
    return (
        <>
            <OurService />
            <Consultation />
            <Treatment />
            <Product />
            <TreatmentVideo />
            <Question />
        </>
    )
}

export default Service