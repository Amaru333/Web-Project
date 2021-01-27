import '../style/HomePage.css';
import FeaturedProducts from './FeaturedProducts';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function HomePage() {
  return (
    <div className="homepage">
      <ImageSlider slides={SliderData} />
      <div className="homePageProducts">
        <h2>
          <span className="title">Featured</span>
        </h2>
        <div className="productLine">
          <FeaturedProducts image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d7a05207-a1a1-4c53-a31b-2b2b8883cc35/react-infinity-run-flyknit-2-running-shoe-Qfh63N.jpg" title="Nike React Infinity Run" price="7,999"/>
          <FeaturedProducts image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1818172f-88aa-45cb-b004-801af03146c8/air-max-90-shoe-m17bv4.jpg" title="Nike Flyknit 2" price="3,499"/>
          <FeaturedProducts image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6a63bf13-d648-4da1-9cf8-652fdb73a0d7/air-zoom-superrep-2-hiit-class-shoe-tKPcgR.jpg" title="Air Zoom SuperRep 2" price="12,999"/>
        </div>
        <h2>
          <span className="title">Sports</span>
        </h2>
        <div className="productLine">
          <FeaturedProducts image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c6d7b4a1-e254-4a68-af26-7d7183043a21/custom-nike-phantom-gt-academy-by-you.jpg" title="Nike Phantom GT Academy" price="12,999"/>
          <FeaturedProducts image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6c996067-e95b-462a-8d2c-c3f29292c053/custom-nike-mercurial-vapor-13-academy-by-you.jpg" title="Nike Mercurial Vapor 13" price="16,499"/>
          <FeaturedProducts image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6c996067-e95b-462a-8d2c-c3f29292c053/custom-nike-mercurial-vapor-13-academy-by-you.jpg" title="Nike Air Jordan XXXV" price="24,499"/>
        </div>
        <h2>
          <span className="title">Electronics</span>
        </h2>
        <div className="productLine">
          <FeaturedProducts image="https://cdn.discordapp.com/attachments/727578116729602109/798905128626683934/unknown.png" title="Fitbit 3.0" price="3,999"/>
          <FeaturedProducts image="https://i.imgur.com/C1UVzkz.jpg" title="iPhone 12 Pro" price="1,12,499"/>
          <FeaturedProducts image="https://cdn.discordapp.com/attachments/727578116729602109/799180191367692298/unknown.png" title="ASUS ROG Zephyrus Duo 15" price="2,15,999"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;