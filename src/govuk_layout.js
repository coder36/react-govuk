import React from 'react'

export default class GovUkLayout extends React.Component {

    render() {
        let phaseBanner;
        if (this.props.phaseBanner) {
            phaseBanner =
                <div className="phase-banner">
                    <p>
                        <strong className="phase-tag">BETA</strong>
                        <span className="span">This is a new service – your <a href="#">feedback</a> will help us to improve it.</span>
                    </p>
                </div>
        }

        return (
            <div>
                <div id="skiplink-container">
                    <div>
                        <a href="#content" className="skiplink">Skip to main content</a>
                    </div>
                </div>

                <div id="global-cookie-message">
                    <p>GOV.UK uses cookies to make the site simpler. <a href="https://www.gov.uk/help/cookies">Find out more about cookies</a></p>
                </div>


                <header role="banner" id="global-header" className="with-proposition">
                    <div className="header-wrapper">
                        <div className="header-global">
                            <div className="header-logo">
                                <a href="https://www.gov.uk/" title="Go to the GOV.UK homepage" id="logo" className="content">
                                    <img src="/assets/images/gov.uk_logotype_crown_invert_trans.png" width="35" height="31" alt=""/> GOV.UK
                                </a>
                            </div>
                        </div>
                        {this.props.headerProposition}

                    </div>
                </header>

                <div id="global-header-bar"></div>


                <main role="main">
                    <div id="page-container">
                        {phaseBanner}



                        {this.props.children}
                    </div>
                </main>

                <footer className="group js-footer" id="footer" role="contentinfo">
                    <div className="footer-wrapper">
                        <div className="footer-meta">
                            <div className="footer-meta-inner">
                                <div className="open-government-licence">
                                    <p className="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
                                    <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>

                                </div>
                            </div>

                            <div className="copyright">
                                <a href="http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/">© Crown copyright</a>
                            </div>
                        </div>
                    </div>
                </footer>



                <div id="global-app-error" className="app-error hidden"></div>
            </div>
        )
    }
}