// Material-ui

const theme = {
	breakpoints: {
		values: {
			xs: 0, // Extra small devices (portrait phones, less than 576px). No media query for 'xs' since this is the default value
			sm: 576, // Small devices (landscape phones, 576px and up)
			md: 768, // Medium devices (tablets, 768px and up)
			lg: 992, // Large devices (desktops, 992px and up)
			xl: 1200, // Extra large devices (large desktops, 1200px and up)
		},
	},
	palette: {
		primary: {
			main: '#05668D',
		},
		secondary: {
			main: '#00C39A',
		},
	},
	typography: {
		useNextVariants: true,
		// fontFamily: '\'Montserrat\'',
		fontFamily: ['"Montserrat"', 'Open Sans'].join(','),
		h1: {
			fontSize: '3.75vw',
			lineHeight: '5.55vw',
			fontWeight: 700,
			letter: '-3%',
		},
		h2: {
			fontSize: '1.38vw',
			lineHeight: '2.1vw',
		},
		h3: {
			fontSize: '2.77vw',
		},
		h4: {
			
		},
		h5: {
			
		},
		h6: {
			
		},
		body1: {
			size: 16,
		},
		body2: {
			size: 14,
		},
		subtitle1: {
			
		},
	},
	overrides: {
		MuiContainer: {
			root: {
				margin: 0,
				padding: '0 !important',
			},
		},
		MuiCardContent: {
			root: {
				margin: 0,
				padding: '0 !important',
			},
		},
		MuiButton: {
			root: {
				width: 230,
				height: 48,
				padding: '0 20px',
				borderRadius: 3,
				textAlign: 'ClientRect',
				color: '#FFFFFF',
				backgroundColor: '#00C39A',
				"&:hover": {
					color: '#000000',
				}
			},
		},
		MuiInput: {
			formControl: {
				marginBottom: 0,
			}
		},
	}
}

export default theme
