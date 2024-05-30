
import 'twin.macro'
import tw from 'twin.macro'
// import {ExpertsData} from "../../../assets/data"
import Expert from '../Expert/Expert'
import Expert1 from "../../../assets/avatar/unsplash_pTrhfmj2jDA.png"
import Expert2 from "../../../assets/avatar/unsplash_FVh_yqLR9eA.png"
import Expert3 from "../../../assets/avatar/unsplash_mEZ3PoFGs_k.png"

const ExpertsData = [
    {
        id: 1,
        img: Expert1,
        job: "Surgeon",
        name: "Briyan Nevalli",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    },
    {
        id: 2,
        img: Expert2,
        job: "Dermatologist",
        name: "Bella sebastian",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    },
    {
        id: 3,
        img: Expert3,
        job: "Stylist expert",
        name: "Lilly Adams",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    },
];

const ListExpert = () => {
    const ExpertListWrapper = tw.div`flex flex-row justify-between pt-[9.4rem] lg:max-w-full 2lg:gap-4 lg:gap-4 md:flex-col md:items-center sm:flex-col sm:items-center md:pt-0 sm:pt-0`
    return (
        <ExpertListWrapper>{
            ExpertsData.map((expert) =>(
                <Expert 
                // key={expert.id}
                img={expert.img} name={expert.name} job={expert.job} description={expert.description} special={expert.id === 2}/>
            ))
        }
        </ExpertListWrapper>
    )
}

export default ListExpert
