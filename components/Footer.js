// Modules
import Link from 'next/link'

// Components
// ...

// Material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function Footer(props) {
	return (
		<footer style={ styleFooter }>
			<Grid container spacing={3}>
 				<Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={ styleFooterItem }>
					<Typography variant="body1" className='bold'>Annonces auto</Typography>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Toute la France</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Par département</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Par ville</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Par marque</Typography></Link>
				</Grid>
 				<Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={ styleFooterItem }>
					<Typography variant="body1" className='bold'>Déposer une annonce</Typography>
					<Link href='/'><Typography variant="body2" style={ styleLink }>A Paris</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>A Bordeaux</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>A Marseille</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>A Lille</Typography></Link>
				</Grid>
 				<Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={ styleFooterItem }>
					<Typography variant="body1" className='bold'>Reprise auto</Typography>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Obtenir un prix de reprise de cas</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Coté mon véhicule</Typography></Link>
				</Grid>
 				<Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={ styleFooterItem }>
					<Typography variant="body1" className='bold'>Informations et démarques</Typography>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Guide d'achat</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Guide de vente</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Foire aux questions</Typography></Link>
					<Link href='/'><Typography variant="body2" style={ styleLink }>Infos pratiques</Typography></Link>
				</Grid>
			</Grid>
			<div style={ styleImage }>
				<img src='/images/logo.png'></img>
			</div>
		</footer>
	)
}

const styleFooter = {
	padding: '110px 130px 37px 130px',
	backgroundColor: '#F9F6F6'
}
const styleFooterItem = {
	width: 275,
}
const styleLink = {
	padding: '24px 0',
	textDecoration: 'underline',
	listStyle: 'none',
	color: '#989898!important',
	cursor: 'pointer',
}
const styleImage = {
	paddingTop: 100,
}
