import React, { useState } from "react";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";

const ProductDetail = () => {
    const product = {
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "mathematician",
        img: "https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1708331660539.jpg?x-oss-process=image/format,webp",
        price: 9.99,
    };

    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        // TODO: Handle adding the product to the cart
        console.log(`Added ${quantity} ${product.name} to the cart`);
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col md:flex-row items-center justify-center m-8">
                <div className="grid gap-2 grid-cols-2 ">
                    <div className="flex items-start">
                        <div className="flex flex-col">
                            <ul className="flex flex-col">
                                <li>
                                    <img src={product.img} alt={product.name} className="w-25 h-20 mb-4" />
                                </li>
                                <li>
                                    <img src={product.img} alt={product.name} className="w-25 h-20 mb-4" />
                                </li>
                                <li>
                                    <img src={product.img} alt={product.name} className="w-25 h-20 mb-4" />
                                </li>
                                <li>
                                    <img src={product.img} alt={product.name} className="w-25 h-20 mb-4" />
                                </li>
                            </ul>
                        </div>
                        <img src={product.img} alt={product.name} className="w-640 h-64 md:w-auto md:h-auto ml-4" />
                    </div>

                    <div>
                        <h1 className="">
                            {product.name}
                        </h1> <br />
                        <p className="">
                            <strong>Profession:</strong> {product.profession}
                        </p> <br /> <br />
                        <p className="">
                            <strong>Price:</strong> ${product.price}
                        </p> <br />
                        <div className="mt-4 items-center">
                            <label htmlFor="quantity" className="mr-2">
                                Quantity:
                            </label>
                            <div className="flex items-center">
                                <button
                                    className="bg-white hover:bg-gray-200 text-black font-bold py-1 px-2 rounded-none border border-black w-6 h-6"
                                    onClick={handleDecreaseQuantity}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    id="quantity"
                                    className="border-none p-1 w-16 text-center"
                                    min="1"
                                    value={quantity}
                                    onChange={() => { }}
                                    readOnly={true}
                                    style={{ width: "40px" }}
                                />
                                <button
                                    className="bg-white hover:bg-gray-200 text-black font-bold py-1 px-2 rounded-none border border-black w-6 h-6"
                                    onClick={handleIncreaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-none mt-4"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <div className="mt-4 text-left">
                            <h2 className="text-lg font-bold mt-2">Product Details:</h2>
                            <ul>
                                <li>- BRAND POP MART <br />
                                    - SIZE 793mm<br />
                                    - MATERIAL PVC<br />
                                    - Launch Quantity: Limited to 10pcs<br />
                                    - *MEGA COLLECTION products are excluded from promotions and events.<br />
                                    - *Customers shall bear the tariffs and value-added tax incurred in the destination country<br />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetail;
