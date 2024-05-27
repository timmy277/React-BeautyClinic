
import 'twin.macro'
import tw from 'twin.macro'
import TwitterImg from '../../../assets/website/Twitter.png'
import FacebookImg from '../../../assets/website/Facebook.png'
import InstagramImg from '../../../assets/website/Instagram.png'
import { GrayP, TwSpan, TwTitle_SM } from '../../Material/Material'
import styled from 'styled-components'

const Expert = (props:{ name : string, img : string, job : string, description : string, special : boolean}) => {
    const ExpertContainer = styled.div<{special: boolean}>(({ special }) => [
        tw`flex flex-col items-center max-w-[16.875rem] border-none rounded-[2.625rem] md:max-w-full md:w-[90%] md:mb-[7rem] sm:max-w-full sm:w-[90%] sm:mb-[7rem]`,
        special && tw`bg-white shadow-md max-w-[26.5rem] w-[26.5rem] pb-[4.7rem] pt-[5.8rem] mt-[-5.8rem] md:shadow-none sm:shadow-none`
    ]);
    const ExpertImage = tw.img``
    const ExpertJob = tw(TwSpan)`mb-[0.875rem] mt-[3.313rem]`
    const ExpertName = tw(TwTitle_SM)`mb-[1.35rem] tracking-[0.011em]`
    const ExpertDescription = tw(GrayP)`mb-[2.4rem] max-w-[16.875rem] text-center tracking-[0.09rem] text-sm font-normal leading-[1.313rem] md:max-w-[70%] sm:max-w-[70%]`
    const ListSocial = tw.div`flex justify-between gap-[0.125rem] mx-auto`
    const SocialPlatform = tw.div``
    const SocialIcon = tw.img`w-[5.063rem] h-[5.063rem] max-w-none `

    return (
        <ExpertContainer special={props.special}>
            <ExpertImage src={props.img} alt="" />
            <ExpertJob>{props.job}</ExpertJob>
            <ExpertName>{props.name}</ExpertName>
            <ExpertDescription>{props.description}</ExpertDescription>
            <ListSocial>
                <SocialPlatform>
                    <SocialIcon src={TwitterImg} alt="Twitter" />
                </SocialPlatform>
                <SocialPlatform>
                    <SocialIcon src={FacebookImg} alt="Facebook" />
                </SocialPlatform>
                <SocialPlatform>
                    <SocialIcon src={InstagramImg} alt="Instagram" />
                </SocialPlatform>
            </ListSocial>
        </ExpertContainer>
    )
}

export default Expert
