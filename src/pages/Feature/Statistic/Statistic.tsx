import tw from 'twin.macro'
import handshake from '../image/icon/handshake.png'
import brotherhood from '../image/icon/brotherhood.png'
import earth from '../image/icon/earth.png'
import doctor from '../image/icon/doctor.png'


const Statistic = () => {
    const StatisticContainer = tw.div`bg-[url("./BackgroundStatistic.png")] bg-cover bg-center bg-no-repeat mt-[5.3rem]`
    const StatisticContent = tw.div``
    const StatisticText = tw.div``
    const Evidence = tw.div``
    return (
    <>
        <StatisticContainer>
            <StatisticContent>
                <StatisticText>
                    <h1>Why choosing us?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                </StatisticText>
                <Evidence>
                    <div>
                        <img src={handshake} alt="" />
                        <div>
                            <span>100%</span>
                            <p>trusted clinic</p>
                        </div>
                    </div>
                    <div>
                        <img src={brotherhood} alt="" />
                        <div>
                            <span>99%</span>
                            <p>customer love</p>
                        </div>
                    </div>
                    <div>
                        <img src={earth} alt="" />
                        <div>
                            <span>75+</span>
                            <p>asian branch</p>
                        </div>
                    </div>
                    <div>
                        <img src={doctor} alt="" />
                        <div>
                            <span>1200+</span>
                            <p>licensed worker</p>
                        </div>
                    </div>
                </Evidence>
            </StatisticContent>
        </StatisticContainer>
    </>
    )
}

export default Statistic
