// Modules
import Swiper from 'react-id-swiper'

// Components
import CustomerReviewsCard from './CustomerReviewsCard'

// Files
import 'swiper/swiper-bundle.css'

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const params = {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3
}


export default function CustomerReviews(props) {
	const data = [
		{
			text: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
			firstname: 'Florence',
			job: 'Directrice de sex-shop',
			image: '25.png',
		},
		{
			text: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
			firstname: 'Georges',
			job: 'CTO',
			image: '19.png',
		},
		{
			text: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
			firstname: 'David',
			job: 'Monteur vidéo',
			image: '46.png',
		},
		{
			text: '“ En déposant mon annonce sur Annonces-auto.meilleure-reprise.com j’ai pu vendre ma voiture d’occasion rapidement et sans risques “',
			firstname: 'Jordan',
			job: 'Directrice de sex-shop',
			image: '41.png',
		},
	]

	return (
		<div style={ styleCustomerReviews }>
			<Typography variant="h3">Avis clients</Typography>
			<div>
				<Swiper {...params}>
					{ data.map((d, i) => {
						return (
							<div key={ i }>
								<CustomerReviewsCard data={ d }></CustomerReviewsCard>
							</div>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

const styleCustomerReviews = {
	padding: '76px 0 80px 130px',
	backgroundColor: '#e6f0f4',
}
