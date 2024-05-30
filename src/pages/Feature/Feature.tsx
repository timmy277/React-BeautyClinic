
import FeatureAboutUs from "./Components/FeatureAboutUs/FeatureAboutUs"
import FeatureBlog from "./Components/FeatureBlog/FeatureBlog"
import FeatureService from "./Components/FeatureService/FeatureService"
import FeatureSlider from "./Components/FeatureSlider/FeatureSlider"
import RequestCall from "./Components/RequestCall/RequestCall"
import Statistic from "./Statistic/Statistic"



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
    )
}

export default Feature
