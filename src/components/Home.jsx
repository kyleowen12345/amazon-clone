import React from "react";
import "../css/Home.css";
import Product from "./Product";
import { useStateValue } from "../context/StateProvider";

function Home() {
	const [{ user }] = useStateValue();

	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
				alt=""
			/>
			{/* product id, title, price rating, image */}
			{!user ? (
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
			) : (
				<div className="home__grid">
					<div className="home__row">
						<Product
							id="12341234"
							title="PowerXL Air Fryer Grill 8 in 1 Roast, Bake, Rotisserie, Electric Indoor Grill (6 Piece Accessory Pack)"
							price={159.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/61ivASYZKvL._AC_UY218_.jpg"
						/>
						<Product
							id="123232351"
							title="Dash DFAF455GBRD01 Deluxe Electric Air Fryer + Oven Cooker with Temperature Control, Non Stick Fry Basket, "
							price={79.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/716ck0cDsaL._AC_UY218_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="923341234"
							title="
							Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black"
							price={89.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UY218_.jpg"
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
							title="Cuisinart SS-15P1 Coffee Center 12-Cup Coffeemaker and Single-Serve Brewer, Silver"
							price={69.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/61FB1fnbbOL._AC_UY218_.jpg"
						/>
						<Product
							id="1237567563434"
							title="Best Seller
							COSORI Smart WiFi Air Fryer 5.8QT(100 Recipes), Digital Touchscreen with 11 Cooking Presets for Air Frying "
							price={49.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/71NCsHet1NL._AC_UY218_.jpg"
						/>
					</div>
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
					<div className="home__row">
						<Product
							id="12341234"
							title="Kismile 6 Quart Air Fryer Electric Hot Air Fryer,1500 Watts Healthy Oil-Free Cooker with LCD Digital Panel,Time/Temp "
							price={79.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/51zwq4syfAL._AC_UY218_.jpg"
						/>
						<Product
							id="123232351"
							title="eufy by Anker, BoostIQ RoboVac 11S (Slim), Robot Vacuum Cleaner, Super-Thin, 1300Pa Strong Suction, Quiet, "
							price={159.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/71TmTj7HjNL._AC_UY218_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="923341234"
							title="Cuisinart BFP-703BC Smart Power Duet Blender/Food Processor, Brushed Chrome"
							price={89.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/81VdLc+R9ML._AC_UY218_.jpg"
						/>
						<Product
							id="1262331234"
							title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
							price={149.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/51eJvZB-RLL._AC_UY218_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="121312411234"
							title="Toshiba EC042A5C-SS Countertop Microwave Oven with Convection, Smart Sensor, Sound On/Off Function and LCD "
							price={89.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/7141asVUNxL._AC_UY218_.jpg"
						/>
						<Product
							id="1237567563434"
							title="TAnova Culinary AN500-US00 Sous Vide Precision Cooker (WiFi), 1000 Watts | Anova App Included, Black and Silver"
							price={140.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/61XLUEdTI4L._AC_UY218_.jpg"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
