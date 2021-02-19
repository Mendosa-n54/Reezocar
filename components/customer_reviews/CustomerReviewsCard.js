// Modules
// ...

// Components
// ...

// Material-ui
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function CustomerReviews({ data }) {
	return (
		<div style={ styleCustomerReviews }>
            <Grid container alignItems="flex-end" alignContent='flex-end'>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={ styleText }>
                    <Typography variant='body1'>{ data.text }</Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <img style={ styleImage } src={ '/images/' + data.image } className='img'></img>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} style={ styleFirstname }>
                    <Typography variant='body1'>{ data.firstname }</Typography>
                    <Typography variant='body1'>{ data.job }</Typography>
                </Grid>
            </Grid>
		</div>
	)
}

const styleCustomerReviews = {
    width: 380,
    height: 220,
    padding: '25px 32px',
    backgroundColor: '#FFFFFF'
}
const styleText = {
    paddingBottom: 30,
}
const styleImage = {
	borderRadius: '100px',
}
const styleFirstname = {
    paddingLeft: 15,
}
