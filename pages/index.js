// Modules
// ...

// Files
import Head from 'next/head'
import MaterialUiTheme from '../components/MaterialUiTheme'

// Components
import Nav from '../components/Nav'
import Banner from '../components/banner/Banner'
import CustomerReviews from '../components/customer_reviews/CustomerReviews'
import Advertisement from '../components/advertisement/Advertisement'
import WhyChooseMr from '../components/why_choose_mr/WhyChooseMr'
import Digital from '../components/digital/Digital'
import EmailBox from '../components/email_box/EmailBox'
import Info from '../components/info/Info'
import Footer from '../components/Footer'

// Material-ui
// ...

export default function Home() {
	return (
		<div className="container" style={ styleContainer }>
			<MaterialUiTheme>
				<Head>
					<title>Meilleure-reprise.com</title>
					<link rel="icon" type="image/png" href="/images/logo.png" />
				</Head>

				<Nav></Nav>

				<main className='main'>
					<Banner></Banner>
					<CustomerReviews></CustomerReviews>
					<Advertisement></Advertisement>
					<WhyChooseMr></WhyChooseMr>
					<Digital></Digital>
					<EmailBox></EmailBox>
					<Info></Info>
				</main>

				<Footer></Footer>
			</MaterialUiTheme>
		</div>
	)
}

const styleContainer = {
	maxWidth: 1440,
	minHeight: '100vh',
	margin: 'auto',
	backgroundColor: '#FFFFFF',
}
