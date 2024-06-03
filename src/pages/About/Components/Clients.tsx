import tw from 'twin.macro'
import { GrayP, TwSpan, TwTitle_MD } from '../../../components/Material'
import Agency1 from '../image/others/LOGO1.png'
import Agency2 from '../image/others/LOGO2.png'
import Agency3 from '../image/others/LOGO3.png'
import Agency4 from '../image/others/LOGO4.png'
import Agency5 from '../image/others/LOGO5.png'
const Clients = () => {

    const ClientContainer = tw.div`max-w-[60.125rem] mx-auto flex flex-col pt-[6.2rem] mb-[7.7rem] 2lg:max-w-full 2lg:px-[17%] lg:max-w-full lg:px-[18%]`

    const ClientContent = tw.div`max-w-full flex flex-col ml-[-0.8rem] mb-[3.4rem] text-center md:max-w-full md:px-[5%] md:mb-[8%] md:items-center md:mx-auto sm:max-w-full  sm:px-[4%] sm:mb-[6%] sm:items-center sm:mx-auto xs:px-0`
    const ClientSpan = tw(TwSpan)`mb-[0.7rem] tracking-[0.01rem]`
    const ClientTitle = tw(TwTitle_MD)`mb-[1.3rem] tracking-[0.01rem] sm:max-w-[80%]`
    const ClientDescription = tw(GrayP)`font-normal tracking-[0.1039rem] mb-[3rem] md:max-w-[70%] md:mx-auto sm:max-w-[70%] sm:mx-auto`

    const ListAgency = tw.div`flex justify-between items-center lg:max-w-full w-full lg:gap-[4%]`
    const Agency = tw.div``
    const Agency1st = tw.div`mr-[-0.206rem]`
    const Agency4th = tw.div`mt-[-0.1rem]`
    const AgencyImg = tw.img``
    return (
        <>
            <ClientContainer>
                <ClientContent>
                    <ClientSpan>Our Clients</ClientSpan>
                    <ClientTitle>Well-known agencies</ClientTitle>
                    <ClientDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ClientDescription>
                </ClientContent>
                <ListAgency>
                    <Agency1st>
                        <AgencyImg src={Agency1} alt="" />
                    </Agency1st>
                    <Agency>
                        <AgencyImg src={Agency2} alt="" />
                    </Agency>
                    <Agency>
                        <AgencyImg src={Agency3} alt="" />
                    </Agency>
                    <Agency4th>
                        <AgencyImg src={Agency4} alt="" />
                    </Agency4th>
                    <Agency>
                        <AgencyImg src={Agency5} alt="" />
                    </Agency>
                </ListAgency>
            </ClientContainer>
        </>
    )
}

export default Clients
