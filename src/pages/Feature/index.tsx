import FeatureAboutUs from "./Components/FeatureAboutUs";
import FeatureBlog from "./Components/FeatureBlog/FeatureBlog";
import FeatureService from "./Components/FeatureService/FeatureService";
import FeatureSlider from "./Components/FeatureSlider";
import RequestCall from "./Components/RequestCall";
import Statistic from "./Components/Statistic";

const Feature = () => {
  return (
    <>
      <FeatureSlider />
      <FeatureAboutUs />
      <FeatureService />
      <Statistic />
      <FeatureBlog />
      <RequestCall />
    </>
  );
};

export default Feature;
