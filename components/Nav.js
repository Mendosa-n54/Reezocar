// Modules
import Link from 'next/link'
import { useState } from 'react'

// Components
// ...

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


export default function Nav(props) {
	return (
		<nav style={ styleNav }>
			
			<Grid container alignItems="center" direction='row'>
				<Grid item xs={5} sm={5} md={5} lg={5} xl={5} className='left'>
					<img src='/images/logo.png'></img>
				</Grid>
				<Grid item xs={7} sm={7} md={7} lg={7} xl={7} className='right'>
					<Link href='/' className='link'><Typography component='body1' style={ styleLink }>Acheter</Typography></Link>
					<Link href='/' className='link'><Typography component='body1' style={ styleLink }>Conseils</Typography></Link>
					<Link href='/' className='link'><Typography component='body1' style={ styleLink }>Qui sommes-nous ?</Typography></Link>
					<Link href='/' className='link'><Button variant='outlined' style={ styleLink } >Vendre ma voiture</Button></Link>
				</Grid>
			</Grid>
		</nav>
	)
}

const styleNav = {
	width: 1440,
	height: 72,
	padding: '12px 144px',
	position: 'fixed',
	backgroundColor: '#FFFFFF',
	zIndex: 999,
}
const styleLink = {
	padding: '0 20px',
}
