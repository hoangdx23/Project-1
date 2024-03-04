import React from "react";
import "../../features/css/home.css";
const Home = () => {
  const products = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
    },
  ];

  return (
    <div>
      <h1 className="tieude"> New Arrivals</h1>
      <div className="sp">
        <div>
          <img
            src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709174613826.jpg?x-oss-process=image/format,webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709176119980.jpg?x-oss-process=image/format,webp"
            alt=""
          />
          <img
            src="https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709174641655.jpg?x-oss-process=image/format,webp"
            alt=""
          />
        </div>
      </div>
      <h1>Top Sellings</h1>
      <div className="home flex flex-wrap ">
        {products.map((product) => {
          return (
            <div key={product.id} className="card w-1/4 p-4 py-10">
              <div className="imgBx ">
                {/* Chú ý: Đây là một ví dụ, bạn cần cung cấp URL của hình ảnh cho thuộc tính src */}
                <img src={product.img} alt="nike-air-shoe" />
              </div>
              <div className="contentBx">
                <div className="button">
                  <a className="button-link primary-button" href="#">
                    Buy Now
                  </a>
                  <a className="button-link secondary-button" href="#">
                    Thêm vào giỏ
                  </a>
                </div>
                <div className="name">
                  <h2>{product.name}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
