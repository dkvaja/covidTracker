import React from 'react'
import WarningIcon from '@material-ui/icons/Warning';

const Error = () => {
    return (
        <div className="footer-fix flex-center error-div">
            <div className="error-text flex-column-center">
            <h1 className="error-heading">Link Not Found</h1>
            <p>Sorry! Link not Found</p>
            </div>
            <div className="error-icon flex-center">
            <WarningIcon className="eicon"/>
            </div>
        </div>
    )
}

export default Error
