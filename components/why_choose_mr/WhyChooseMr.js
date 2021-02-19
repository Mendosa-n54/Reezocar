// Modules
// ...

// Components
import WhyChooseMrCard from './WhyChooseMrCard'

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function WhyChooseMr(props) {
	const data = [
		{
			rubric: 'DEMARCHES ET INFORMATIONS',
			title: 'Les conseils d\'un professionnel auto pour acheter ou vendre une voiture d\'occasion',
			text: 'Suspendisse at egestas elit. Nunc odio ipsum, lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue. Suspendisse tristique ultrices accumsan.',
			image: 'nouveau-controle-technique-2019.png',
			buttonLabel: 'M\'informer',
			color: '#494949',
		},
		{
			rubric: 'VENDRE RAPIDEMENT',
			title: 'Formulaire simplifié pour la vente ou la reprise de votre voiture d’occasion',
			text: 'Suspendisse at egestas elit. Nunc odio ipsum, lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue. Suspendisse tristique ultrices accumsan.',
			image: 'telephone.png',
			buttonLabel: 'Vendre',
			color: '#05668d',
		},
		{
			rubric: 'ACHETER  EN TOUTE SECURITE',
			title: 'Cherchez et trouvez l\'annonce auto qui vous correspond partout en France',
			text: 'Suspendisse at egestas elit. Nunc odio ipsum, lobortis id congue id, lacinia vitae turpis. Nam et iaculis augue. Suspendisse tristique ultrices accumsan.',
			image: 'prime-achat-voiture.png',
			buttonLabel: 'Acheter',
			color: '#00c39a',
		},
	]

	return (
		<div style={ styleWhyChooseMr }>
			<Typography variant="h3" className='center'>Pourquoi choisir <span style={ styleSpanGreen }>meilleure-reprise.com</span> ?</Typography>
			<Typography variant="body1" color='primary' className='center bold'>Acheter, vendre ou faire reprendre une voiture d'occasion n'a jamais été si simple !</Typography>
			<Grid container spacing={2} alignItems="center" style={ styleList }>
				{
					data.map((d, i) => {
						return (
							<Grid key={ i } item xs={12} sm={12} md={4} lg={4} xl={4}>
								<WhyChooseMrCard  data={ d }></WhyChooseMrCard>
							</Grid>
						)
					})
				}
			</Grid>
		</div>
	)
}

const styleWhyChooseMr = {
	padding: '73px 130px 80px 130px',
	backgroundColor: '#E6F0F4',
}
const styleList = {
	marginTop: 60,
}
const styleSpanGreen = {
	color: '#00C39A',
}
