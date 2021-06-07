import React from 'react'
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom'

function getWithExpiry(key) {
	const itemStr = Cookies.get(key);
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)

	return item.value
}

const LoginGuard = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            (getWithExpiry('token'))
                ? <Component {...props} />
                :  <Redirect to='/login' />
        )} />
    )
}

export default LoginGuard