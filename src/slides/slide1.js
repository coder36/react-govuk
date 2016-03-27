import React from 'react'
import Govuk from '../govuk_layout'


export default function () {
    return (
        <Govuk phaseBanner="true">

            <div className="grid-row">
                <div className="column-two-thirds">
                    <h1 className="heading-xlarge">Welcome...</h1>
                </div>
            </div>

            <table>
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th className="numeric" scope="col">Paper form</th>
                    <th className="numeric" scope="col">Digital</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>25 November to 1 December 2013</td>
                    <td className="numeric">2,763</td>
                    <td className="numeric">1,792</td>
                </tr>
                <tr>
                    <td>2 to 8 December 2013</td>
                    <td className="numeric">2,850</td>
                    <td className="numeric">1,740</td>
                </tr>
                <tr>
                    <td>9 to 15 December 2013</td>
                    <td className="numeric">2,388</td>
                    <td className="numeric">1,683</td>
                </tr>
                </tbody>
            </table>

            <br/>
            <br/>
            <input className="button" type="submit" value="Save and continue"/>
            <br/>
            <br/>

            <a className="button button-start" href="#" role="button">Start now</a>
            <br/>

            <br/>
            <div className="notice">
                <i className="icon icon-important">
                    <span className="visuallyhidden">Warning</span>
                </i>
                <strong className="bold-small">
                    You can be fined up to £5,000 if you don’t register.
                </strong>
            </div>
            <br/>
            <br/>

            <form>
                <fieldset className="inline">
                    <label className="form-label" for="ni-number">
                        National Insurance number
                        <span className="form-hint">It'll be on your last payslip. For example, JH 21 90 0A.</span>
                    </label>
                    <input className="form-control" id="ni-number" type="text"/>
                </fieldset>
            </form>


            <br/>


        </Govuk>
    )


}

