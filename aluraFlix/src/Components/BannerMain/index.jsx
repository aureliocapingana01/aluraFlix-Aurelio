import bannerImg from '../../../public/image/BannerMain.png'
import { BannerContainer } from './Estilo'
const Banner = () => {
  return (
    <BannerContainer>
    <img src={bannerImg} alt="" />
    </BannerContainer>
  )
}
export default Banner