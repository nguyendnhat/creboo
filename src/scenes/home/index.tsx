import * as React from "react";
import GridProducts from "../../components/GridProducts";
import BannerBottom from './components/BannerBottom';
import BannerTop from './components/BannerTop';

const Home = () => {
  return (
    <>
        <BannerTop/>
        <BannerBottom/>
        <GridProducts
          title="Sản phẩm bán chạy"
          products={[
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/1.png"),
              price: 112,
              priceBegin: 223,
            },
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/2.png"),
              price: 112,
              priceBegin: 223,
            },
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/3.png"),
              price: 112,
              priceBegin: 223,
            },
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/4.png"),
              price: 112,
              priceBegin: 223,
            },
          ]}
        />
        <GridProducts
          title="Sản phẩm mới"
          products={[
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/1.png"),
              price: 112,
              priceBegin: 223,
            },
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/2.png"),
              price: 112,
              priceBegin: 223,
            },
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/3.png"),
              price: 112,
              priceBegin: 223,
            },
            {
              name: "Fortune Sunflower Oil",
              discount: "-5%",
              gilf: "",
              image: require("../../images/4.png"),
              price: 112,
              priceBegin: 223,
            },
          ]}
        />
    </>
  );
};
export default Home;
