import React from "react";
import "../styles/AboutUs.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="about-us-container">
                <div className="about-us-section-top">
                    <div className="about-us-left">
                        <h2 className="about-us-heading">
                            Welcome to Our Bank
                        </h2>
                        <p className="about-us-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam scelerisque justo vitae augue tincidunt
                            consectetur. Sed auctor efficitur ullamcorper. Nam
                            sit amet fringilla turpis. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nullam scelerisque
                            justo vitae augue tincidunt consectetur.
                        </p>
                        <button className="about-us-button">
                            Learn More ▶
                        </button>
                    </div>
                    <div className="about-us-right">
                        <img
                            src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_ce279a0380.jpg"
                            alt="Bank Building"
                            className="about-us-image"
                        />
                    </div>
                </div>
                <div className="about-us-section">
                    <div className="about-us-subsection">
                        <img
                            src="https://cbr.lk/wp-content/uploads/2018/12/Image1.jpg"
                            alt="Ribbon Cutting"
                            className="about-us-subimage"
                        />
                        <h2 className="about-us-subheading">
                            Ribbon-Cutting 🎀
                        </h2>
                        <p className="about-us-subparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam scelerisque justo vitae augue tincidunt
                            consectetur. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nullam scelerisque justo vitae
                            augue tincidunt consectetur.
                        </p>
                    </div>
                    <div className="about-us-subsection">
                        <img
                            src="https://businesstoday.lk/wp-content/uploads/2022/05/Sampath-Bank-plants-7500-trees-together-with-Rotary-Club-and-Hayleys-1024x682.webp"
                            alt="Rotary Club"
                            className="about-us-subimage"
                        />
                        <h2 className="about-us-subheading">Go-Green 🍃</h2>
                        <p className="about-us-subparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam scelerisque justo vitae augue tincidunt
                            consectetur. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nullam scelerisque justo vitae
                            augue tincidunt consectetur.
                        </p>
                    </div>
                    <div className="about-us-subsection">
                        <img
                            src="https://businesstoday.lk/wp-content/uploads/2022/08/Sampath-Bank-signs-MOU-with-AIMGSL-scaled.webp"
                            alt="MOU with AIMGSL"
                            className="about-us-subimage"
                        />
                        <h2 className="about-us-subheading">
                            MOU-with-AIMGSL 🤝
                        </h2>
                        <p className="about-us-subparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam scelerisque justo vitae augue tincidunt
                            consectetur. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nullam scelerisque justo vitae
                            augue tincidunt consectetur.
                        </p>
                    </div>
                    <div className="about-us-subsection">
                        <img
                            src="https://island.lk/wp-content/uploads/2022/08/dialog.jpg"
                            alt="eZ Banking"
                            className="about-us-subimage"
                        />
                        <h2 className="about-us-subheading">eZ-Banking 📱</h2>
                        <p className="about-us-subparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam scelerisque justo vitae augue tincidunt
                            consectetur. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Nullam scelerisque justo vitae
                            augue tincidunt consectetur.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
