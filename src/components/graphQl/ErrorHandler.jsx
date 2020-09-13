import React from 'react'

/**
 * 
 * @param {*} props.errMsg Sub component to display any business errors 
 */
const ErrorHandler = ({errMsg}) => {
    return (
        <h3 className="graphQlErr">{errMsg}</h3>
    )
}
export default ErrorHandler