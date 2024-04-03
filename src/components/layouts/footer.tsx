// import { Link } from "react-router-dom";
import "../../features/css/baner.css";
const Footer = () => {
  return (
    <div>
            <footer className="sm:mt-56 mt-32 bg-gray-900">
                <div className="lg:py-32 lg:px-8 sm:py-24 py-16 px-6 max-w-7xl mx-auto">
                <div className="xl:gap-8 xl:grid xl:grid-cols-3	">
                    <img src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp" className="h-7" alt="" />
                    <div className="grid xl:mt-0 xl:col-span-2	gap-8 grid-cols-2	mt-16">
                        <div className="md:gap-8 md:grid-cols-2	md:grid">
                            <div>
                                <h3 className="text-white leading-6 text-sm font-semibold">Company</h3>
                                <ul role="list" className="mt-6">
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">ablu</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Careers</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Brand Center</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Blog</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white leading-6 text-sm font-semibold">Help center</h3>
                                <ul role="list" className="mt-6">
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Discord Server</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Twitter</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Facebook</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Contact Us</a></li>
                                </ul>
                            </div>
                        </div> 
                        <div className="md:gap-8 md:grid-cols-2	md:grid">
                            <div>
                                <h3 className="text-white leading-6 text-sm font-semibold">Legal</h3>
                                <ul role="list" className="mt-6">
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Privacy Policy</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Licensing</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white leading-6 text-sm font-semibold">Download</h3>
                                <ul role="list" className="mt-6">
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">iOS</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Android</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">Windows</a></li>
                                    <li className="mt-3"><a href="#" className="text-gray-300 text-sm leading-6 decoration-inherit hover:underline hover:text-gray-500">MacOS</a></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                </div>
            </footer>
        </div>
  );
};
export default Footer;
