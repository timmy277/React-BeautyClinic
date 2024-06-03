import tw from "twin.macro";
import SloganBG from "../image/background/unsplash_Pe9IXUuC6QU.png";
import { GrayP, TwSpan, TwTitle_MD } from "../../../components/Material";

const Slogan = () => {
  const SloganContainer = tw.div` relative mt-[9.4rem]`;
  const Overlay = tw.div`top-0 bottom-0 left-0 right-0 absolute z-0 bg-[#09115699] opacity-[1.6]`;
  const SloganBGWrapper = tw.div`-z-10`;
  const SloganBGImg = tw.img` w-full`;

  const SloganText = tw.div`text-center z-10 absolute inset-0 flex flex-col items-center justify-center mt-[-0.7rem]`;
  const SloganSpan = tw(TwSpan)`text-[#ABB4FF] mb-[0.7rem] xs:mb-0`;
  const SloganTitle = tw(TwTitle_MD)`text-white max-w-[40%] tracking-[0.009rem] mb-[1.2rem] lg:max-w-[50%] md:max-w-[70%] sm:max-w-[70%] xs:text-base xs:max-w-[90%] xs:mb-0`;
  const SloganDescription = tw(GrayP)`text-sink_gray max-w-[48%] lg:max-w-[60%] md:max-w-[70%] sm:max-w-[70%] xs:max-w-[90%]`;
  return (
    <>
      <SloganContainer>
        <SloganBGWrapper>
          <SloganBGImg src={SloganBG} alt="" />
        </SloganBGWrapper>
        <Overlay></Overlay>
        <SloganText>
          <SloganSpan>Business Slogan</SloganSpan>
          <SloganTitle>
            Best responsibility and service for our customers
          </SloganTitle>
          <SloganDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </SloganDescription>
        </SloganText>
      </SloganContainer>
    </>
  );
};

export default Slogan;
