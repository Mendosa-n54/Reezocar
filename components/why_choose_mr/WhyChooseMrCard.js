// Modules
import Link from 'next/link'

// Components
// ...

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


export default function WhyChooseMrCard({ data }) {
	return (
		<div style={ styleWhyChooseMrCard }>
			<Link href='/'>
				<Grid container spacing={1} alignItems="center">
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<img style={ styleImage } src={ '/images/' + data.image } className='img'></img>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
						<Typography variant='body1'>{ data.rubric }</Typography>
						<Typography variant='body1' style={{ color: data.color }}>{ data.title }</Typography>
						<Typography variant='body1' style={ styleText }>{ data.text }</Typography>
						<Button
							type="submit"
							onClick={((e) => {
								e.preventDefault()
							})}
							variant="contained"
							style={{ backgroundColor: data.color, color: '#FFFFFF' }}
						>{ data.buttonLabel }</Button>
					</Grid>
				</Grid>
			</Link>
		</div>
	)
}

const styleWhyChooseMrCard = {
	width: 380,
}
const styleText = {
	padding: '10px 0',
}
const styleImage = {
	borderRadius: '10px',
}
