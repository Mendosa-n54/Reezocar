// Modules
import Link from 'next/link'

// Components
// ...

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function InfoCard({ data }) {
    if (!data.image || data.image == '') {
        data.image = '/images/image-default.png'
    } else {
        data.image = '/images/' + data.image
    }

	return (
		<div style={ styleInfoCard }>
            <Link href='/'>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                        <img src={ data.image } className='img'></img>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
                        <Typography variant='body1'>{ data.rubric }</Typography>
                        <Typography variant='h4' className='underline bold'>{ data.title }</Typography>
                        <Typography variant='body1'>{ data.text }</Typography>
                    </Grid>
                </Grid>
            </Link>
		</div>
	)
}

const styleInfoCard = {
	margin: '20px 0'
}
