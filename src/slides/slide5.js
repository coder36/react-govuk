import React from 'react'
import Govuk from '../govuk_layout'

export default function () {
    return (
        <Govuk phaseBanner="true">
            <main role="main">
                <h1 className="heading-medium">With redux</h1>
            </main>
        </Govuk>
    );
}