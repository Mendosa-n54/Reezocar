// Modules
// ...

// Components
// ...

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


export default function Banner(props) {
	return (
		<div style={ styleBanner }>
			<Typography variant="h1">
				Concessionnaire en ligne spécialiste<br/>
				de <span style={ styleSpanBlue }>l'achat</span> et la <span style={ styleSpanGreen }>vente</span> de voitures d'occasion
			</Typography>
			<Typography variant="h2">Trouver une petite annonce de annonce de voiture d'occasion près de chez vous ou partout en France :</Typography>
		</div>
	)
}

const styleBanner = {
	width: '100%',
	height: 721,
	background: "url('images/header.png')",
	padding: '122px 130px 130px 140px',
}
const styleSpanBlue = {
	color: '#05668D',
}
const styleSpanGreen = {
	color: '#00C39A',
}
