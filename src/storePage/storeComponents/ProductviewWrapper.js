import React, { useState } from "react"
import Productview from "./Productview"

export default (props) => {
    const [headerName, setHeaderName] = useState('')
    const getHeaderName = (title) => setHeaderName(title)
	return (

		<div className="Products-wrapper">

			<Productview title={getHeaderName} />
		</div>

	)
}
