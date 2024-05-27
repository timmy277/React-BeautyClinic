
import 'twin.macro'
import tw from 'twin.macro'
// import {ServicesData} from "../../../assets/data"
import Service1 from "../../../../../assets/avatar/Animation1.png"
import Service2 from "../../../../../assets/avatar/Animation2.png"
import Service3 from "../../../../../assets/avatar/Animation3.png"
import ServiceItem from '../ServiceItem/ServiceItem'

const ServicesData = [
    {
        id: 1,
        img: Service1,
        name: "Beauty consultation",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    },
    {
        id: 2,
        img: Service2,
        name: "Skin treatments",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    },
    {
        id: 3,
        img: Service3,
        name: "Beauty product",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    },
];

const ServiceListItem = () => {
    const ServiceListWrapper = tw.div`flex flex-row gap-14 justify-between md:flex-col md:mx-auto md:w-[90%] sm:flex-col sm:mx-auto sm:w-[85%]`
    return (
        <ServiceListWrapper>{
            ServicesData.map((service) =>(
                <ServiceItem 
                // key ={service.id} 
                img={service.img} name={service.name} description={service.description}/>
            ))
        }
        </ServiceListWrapper>
    )
}

export default ServiceListItem