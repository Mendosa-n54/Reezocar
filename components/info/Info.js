// Modules
// ...

// Components
import InfoCard from './InfoCard'

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


export default function Info(props) {
	const data = [
		{
			rubric: 'Guides d\'achat',
			title: 'Les points à vérifier en premier',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dignissim neque. Pellentesque lacinia, metus vel aliquam iaculis, sem augue vestibulum eros, eu convallis magna libero vitae leo.',
			image: 'reezocar-blog-conseils-expert-head.png',
		},
		{
			rubric: 'Infos pratiques',
			title: 'Ne pas se faire avoir',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dignissim neque. Pellentesque lacinia, metus vel aliquam iaculis, sem augue vestibulum eros, eu convallis magna libero vitae leo.',
			image: 'reduire-son-assurance-auto-min.png',
		},
		{
			rubric: 'Foire aux questions',
			title: 'Comment changer de ventilateur ?',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed dignissim neque. Pellentesque lacinia, metus vel aliquam iaculis, sem augue vestibulum eros, eu convallis magna libero vitae leo.',
			image: '',
		},
	]

	return (
		<div style={ styleInfo }>
			<Grid container spacing={1} alignItems="center">
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Typography variant='h3' style={ styleTitle }>
						Toute {'l\'information'} <br/>
						pour bien <Box component='span' style={ styleSpanBlue }>acheter</Box> ou <Box component='span' style={ styleSpanGreen }>vendre</Box><br/>
						une voiture {'d\'occasion'}
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					{
						data.map((d, i) => {
							return (
								<InfoCard key={ i }  data={ d }></InfoCard>
							)
						})
					}
				</Grid>
			</Grid>
		</div>
	)
}

const styleInfo = {
	padding: '73px 130px 64px 130px'
}
const styleTitle = {
	marginBottom: 30,
}
const styleSpanBlue = {
	color: '#05668D!important',
}
const styleSpanGreen = {
	color: '#00C39A',
}
