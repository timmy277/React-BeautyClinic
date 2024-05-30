
import 'twin.macro'
import tw from 'twin.macro'
// import {ServicesData} from "../../../assets/data"
import Service1 from "../../../image/avatar/icon-1.png"
import Service2 from "../../../image/avatar/icon-2.png"
import Service3 from "../../../image/avatar/icon-3.png"
import FocusService from '../FocusService/FocusService';

const ServicesData = [
    {
        id: 1,
        img: Service1,
        name: "Beauty consultation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
        id: 2,
        img: Service2,
        name: "Skin treatments",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
    {
        id: 3,
        img: Service3,
        name: "Beauty product",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    },
];

const ServiceList = () => {
    const ServiceListWrapper = tw.div`flex flex-row gap-[4.125rem] justify-between mx-[7rem] 2lg:gap-[5%] lg:gap-[3%]  md:flex-col md:mx-auto md:w-[90%] sm:flex-col sm:mx-auto sm:w-[85%]`
    return (
        <ServiceListWrapper>{
            ServicesData.map((service) =>(
                <FocusService img={service.img} name={service.name} description={service.description}/>
            ))
        }
        </ServiceListWrapper>
    )
}

export default ServiceList