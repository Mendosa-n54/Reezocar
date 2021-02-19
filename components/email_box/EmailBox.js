// Modules
// ...

// Components
// ...

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


export default function EmailBox(props) {
	return (
		<div style={ styleEmailBox }>

			<Grid container alignItems="center">
				<Grid item xs={0} sm={0} md={5} lg={5} xl={5} className='center'>
					<img src='/images/jamais-de-la-vie-j-integre-ca-par-morceaux.png' style={ stylImage } alt='Jamais de la vie j integre ça par morceaux'></img>
				</Grid>
				<Grid item xs={12} sm={12} md={7} lg={7} xl={7} style={ styleForm }>
					<div style={ styleTitle }>
						<Typography variant="h3" color="primary">Vous n'avez pas trouvé ?</Typography>
						<Typography variant="body1">Laissez nous votre email, on se charge de tout</Typography>
					</div>

					<div>
						<TextField
							id="email"
							placeholder="Jean.dupont@monemail.com"
							type="text"
							label="Jean.dupont@monemail.com"
							variant="outlined"
							style={ styleTextField }
						/>
						<Button type="submit" style={ styleButton } onClick={((e) => {
								e.preventDefault()
						})}>Gagnerdu temps</Button>
					</div>

					<Typography variant="body1">Notre partenaire Reezocar.com</Typography>
					<Typography variant="body1">Moteur de recherche de véhicule d'occasion en Europe</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

const styleEmailBox = {
	backgroundColor: '#e0f1ed',
}
const styleTitle = {
	marginBottom: 25,
}
const styleForm = {
	padding: 74,
}
const stylImage = {
	width: '70%'
}
const styleTextField = {
	width: 365,
	marginRight: 15,
}
const styleButton = {
	height: 56,
}
