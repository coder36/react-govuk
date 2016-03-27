import React from 'react'
import Govuk from '../govuk_layout'

export default function() {
    return(
        <Govuk phaseBanner="true">
            <main role="main">
                <h1 className="heading-medium">This is react</h1>
            </main>
        </Govuk>
    )
}