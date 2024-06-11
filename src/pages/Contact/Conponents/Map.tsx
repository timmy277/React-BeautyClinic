import tw from "twin.macro"
import MapImg from '../image/map.png'
const Map = () => {
    const MapBG = tw.div`relative mt-[6.9rem]`
    return (
        <>
            <MapBG>
                <div tw='-z-10'>
                    <img src={MapImg} alt="" tw='w-full' />
                </div>
            </MapBG>
        </>
    )
}

export default Map
