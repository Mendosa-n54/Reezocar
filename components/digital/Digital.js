// Modules
// ...

// Components
// ...

// Material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function Advertisement(props) {
	return (
		<div style={ styleAdvertisement }>
			<Typography variant="h3" className='center'>Inspection <span style={ styleSpanGreen }>digitale</span></Typography>
		</div>
	)
}

const styleAdvertisement = {
	height: 100,
	backgroundColor: '#FFFFFF'
}
const styleSpanGreen = {
	color: '#00C39A',
}
