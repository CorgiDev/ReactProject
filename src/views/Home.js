import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

//Main CSS file for page
import './Home.css';

//Imports needed components
import Header from '../components/Header';
import Footer from '../components/Footer';

//Gallery images should be 1024x768

export default class Home extends Component { 
	state = { 
	}
	
	render () {                                   
		return (
			<div id='container'>
				<Helmet>
					<title>Welcome to CorgiDev!</title>
				</Helmet>
				<Header />
				<div id='wrapper'>
			  		<h1 className="mainHeadline">Welcome to CorgiDev!</h1>	
					<section>
						<ul id="gallery">
							<li>
								<a href={"./img/japan.jpg"} data-lightbox="myGallery" data-title="My friend Rina, my boyfriend Mitch, and I in Tokyo, Japan.">
									<figure>
										<img src={"./img/japan.jpg"} alt="" />
										<figcaption>My friend Rina, my boyfriend Mitch, and I in Tokyo, Japan. Click for full image.</figcaption>
									</figure>
								</a>
							</li>
							<li>
								<a href={"./img/kabukiza-full.jpg"} data-lightbox="myGallery" data-title="Photo of me with a woman in a beautiful kimono at a shop in Kubukiza.">
									<figure>
										<img src={"./img/kabukiza.jpg"} alt="" />
										<figcaption>Photo of me with a woman in a beautiful kimono at a shop in Kubukiza. Click for full image.</figcaption>
									</figure>
								</a>
							</li>
							<li>
								<a href={"./img/ghibli-full.jpg"} data-lightbox="myGallery" data-title="Photo of me in front of the Laputa robot statue at the Ghibli Museum in Mikata, Tokyo, Japan.">
									<figure>
										<img src={"./img/ghibli.jpg"} alt="" />
										<figcaption>Photo of me in front of the "Laputa robot statue at the Ghibli Museum in Mikata, Tokyo, Japan. Click for full image.</figcaption>
									</figure>
								</a>
							</li>
							<li>
								<a href={"./img/rolexes-full.jpg"} data-lightbox="myGallery" data-title="Me at the Rolexes near Lexington, KY in 2016.">
									<figure>
										<img src={"./img/rolexes.jpg"} alt="" />
										<figcaption>Me at the Rolexes near Lexington, KY in 2016. Click for full image.</figcaption>
									</figure>
								</a>
							</li>
							<li>
								<a href={"./img/zelda-full.jpg"}  data-lightbox="myGallery" data-title="A screenshot of Link next to the Giant Horse in the Nintendo Switch game 'Legend of Zelda: Breath of the Wild'.">
									<figure>
										<img src={"./img/zelda.jpg"} alt="" />
										<figcaption>A screenshot of Link next to the Giant Horse in the Nintendo Switch game "Legend of Zelda: Breath of the Wild". Click for full image.</figcaption>
									</figure>
								</a>
							</li>
						</ul>
					</section>
					<Footer />
				</div>
			</div>
		)
	}
}