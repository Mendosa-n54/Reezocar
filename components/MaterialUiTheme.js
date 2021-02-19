// Modules
import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// Files
import theme from '../material-ui-theme.config'


const MaterialUiTheme = (props) => {
	let themeMaterialUI = createMuiTheme(theme)

	return (
		<MuiThemeProvider theme={ themeMaterialUI }>
			{ props.children }
		</MuiThemeProvider>
	)
}

export default MaterialUiTheme
