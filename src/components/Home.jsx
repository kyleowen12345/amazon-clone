import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
				alt=""
			/>
			{/* product id, title, price rating, image */}
			<div className="home__grid">
				<div className="home__row">
					<Product
						id="12341234"
						title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
						price={49.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
					/>
					<Product
						id="123232351"
						title="Google Pixel 3 64GB Unlocked GSM & CDMA 4G LTE - Just Black (Renewed)"
						price={49.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71s35mTkAQL._AC_UY218_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="923341234"
						title="Apple AirPods with Wired Charging Case"
						price={49.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg"
					/>
					<Product
						id="1262331234"
						title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
						price={49.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UY218_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="121312411234"
						title="Samsung Galaxy S10+, 128GB, Prism Blue - Fully Unlocked (Renewed)"
						price={49.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/61riXOZAl5L._AC_UY218_.jpg"
					/>
					<Product
						id="1237567563434"
						title="Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition"
						price={49.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/614bao-CmtL._AC_UY218_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
