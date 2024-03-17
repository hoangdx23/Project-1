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
            <div className=" flex flex-col md:flex-row items-center justify-center m-8">
                <div className="xl:grid xl:gap-2 xl:grid-cols-2 ">
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
                        <img src={product.img} alt={product.name} className="w-64 md:w-auto md:h-auto ml-4" />
                    </div>

                    <div>
                        <div className="text-red-500 font-bold text-3xl ">
                            {product.name}
                        </div>
                        <div className="mt-2 text-xl">
                            <strong>Price:</strong> ${product.price}
                        </div>
                        <div className="flex gap-2 my-2">
                            <button className="border text-gray-600 border-gray-400 font-bold focus:text-gray-900 focus:border-black pr-5 grid grid-cols-2 items-center	">
                                <img 
                                src="https://prod-eurasian-res.popmart.com/default/20240209_225711_559553__1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp" 
                                className="w-10 h-10 float-left" alt="" />
                                Single Box
                            </button>
                            <button className="border text-gray-600 border-gray-400 font-bold focus:text-gray-900 focus:border-black pr-5 grid grid-cols-2 items-center	">
                                <img 
                                src="https://prod-eurasian-res.popmart.com/default/20240209_225733_755915__1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp"
                                className="w-10 h-10 float-left" alt="" />
                                Whole Set
                            </button>
                        </div>
                        <div className="mt-4 items-center ">
                            <label htmlFor="quantity" className="mr-2 ">
                                Quantity:
                            </label>
                            <div className="flex items-center">
                                <button
                                className="bg-white hover:bg-gray-200 text-black font-semibold rounded-none border border-black w-6 h-6"
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
                                className="bg-white hover:bg-gray-200 text-black font-semibold rounded-none border border-black w-6 h-6"
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
                    <hr className="mt-5"/>
                    <dl className="w-full">
                        <div x-data="{ isAddIcon: true }" className="pt-6">
                            <button x-on:click="isAddIcon = !isAddIcon" className="flex justify-between	text-gray-900	items-center items-start w-full">
                            <span className="leading-7 text-base font-semibold">ALL FIGURES</span>
                            <span className="items-center h-7 flex ml-6">
                                <svg x-show="isAddIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                            </span>
                        
                            <svg x-show="!isAddIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path></svg>
                            </button>
                            <dd x-show="!isAddIcon" className="pr-12 mt-2">
                                <div className="text-gray-800 leading-7 text-sm">Brand: POP MART</div>
                                <div className="text-gray-800 leading-7 text-sm">Size: Height about 5-8cm</div>
                                <div className="text-gray-800 leading-7 text-sm">Material: PVC/ABS/POM/Magnet</div>
                                <div className="text-gray-800 leading-7 text-sm">A whole set contains 12 blind boxes</div>
                                <div className="text-gray-800 leading-7 text-sm">(There is no repeated figurine if you buy a whole set)</div>
                                <div className="text-gray-800 leading-7 text-sm">*A certain chance to win a secret edition</div>
                            </dd>
                        </div>
                    </dl>
                    <hr className="mt-5"/>
                    <dl className="showContent">
                        <div x-data="{ isAddIcon: true }" className="pt-6">
                            <button x-on:click="isAddIcon = !isAddIcon" className="flex justify-between	text-gray-900 items-center items-start w-full">
                            <span className="leading-7 text-base font-semibold">SHIPPING & AFTER_SALES SERVICE</span>
                            <span className="items-center h-7 flex ml-6">
                                <svg x-show="isAddIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                            </span>
                        
                            <svg x-show="!isAddIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6 relative"></path></svg>
                            </button>
                            <dd x-show="!isAddIcon" className="pr-0 mt-2 w-9/12">
                                <div className="text-gray-800 leading-7 text-sm">1. Shipping：</div>
                                <div className="text-gray-800 leading-7 text-sm">Standard Shipping (15-30 working days)</div>
                                <div className="text-gray-800 leading-7 text-sm">Expedited Shipping (3-7 working days)</div>
                                <div className="text-gray-800 leading-7 text-sm">2. Defects:</div>
                                <div className="text-gray-800 leading-7 text-sm">(1)Limited items don't have an exchange service. If you find a serious defect in the item, contact support@popmart.com, with the related order number and unpacking video of the figurine within five (5) days of receiving the product.</div>
                                <div className="text-gray-800 leading-7 text-sm">(2)For information security reasons, please contact us with the email address you used to place the order. You will be contacted by a Customer Support Representative who will assist you in resolving the issue.</div>
                                <div className="text-gray-800 leading-7 text-sm">(3)In order to avoid any disputes regarding refunds or exchanges, customers are encouraged to video record themselves opening the package. A video recording must be completed no later than two days after delivery. A video should clearly show the shipping sheet, the package condition, and product defects.</div>
                                <div className="text-gray-800 leading-7 text-sm">3. Tax fees：</div>
                                <div className="text-gray-800 leading-7 text-sm">For international express shipments, the buyer shall bear any Customs Duty costs</div>
                            </dd>
                        </div>
                    </dl>
                    <hr className="mt-5"/>
                </div>
            </div>
        </div>

        <Footer />
    </div>
);
};

export default ProductDetail;