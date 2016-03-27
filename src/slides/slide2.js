import React from 'react'
import Govuk from '../govuk_layout'
import Radio from '../radio'
import RadioGroup from '../radio_group'
import RadioOption from '../radio_option'

import '../stylesheets/gov.scss'

export default class Slide2 extends React.Component {

    handleChange(e) {
        console.dir(e)
    }

    render() {
        let headerProposition =
            <div className="header-proposition">
                <div className="content">
                    <a href="#proposition-links" className="js-header-toggle menu">Menu</a>
                    <nav id="proposition-menu">
                        <a href="/" id="proposition-name">Service Name</a>
                        <ul id="proposition-links">
                            <li><a href="url-to-page-1" className="active">Navigation item #1</a></li>
                            <li><a href="url-to-page-2">Navigation item #2</a></li>
                        </ul>
                    </nav>
                </div>
            </div>;

        return (
            <Govuk headerProposition={headerProposition}>
                <main role="main">


                    <h1 className="heading-medium">
                        Do you know their National Insurance number?
                    </h1>

                    <form>
                        <fieldset className="inline">

                            <legend className="visuallyhidden">Do you know their National Insurance number?</legend>

                            <div className="form-group">
                                <RadioGroup>
                                    <Radio id="radio-indent-1" name="radio-indent-group" type="radio" value="Yes" linkRef="national_insurance">
                                        Yes
                                    </Radio>
                                    <Radio id="radio-indent-2" name="radio-indent-group" type="radio" value="No">
                                        No
                                    </Radio>

                                </RadioGroup>

                                <RadioOption linkRef="national_insurance">
                                    <div className="panel panel-border-narrow" id="example-ni-no">
                                        <label className="form-label" for="national-insurance">National Insurance
                                            number</label>
                                        <input className="form-control" name="national-insurance" type="text"
                                               id="national-insurance"/>
                                    </div>
                                </RadioOption>
                            </div>



                        </fieldset>
                    </form>

                    <h3 className="heading-medium">Which types of waste do you transport regularly?</h3>

                    <p>Select all that apply</p>

                    <form>
                        <fieldset>

                            <legend className="visuallyhidden">Which types of waste do you transport regularly?</legend>

                            <RadioGroup>
                                <Radio id="waste-type-1" name="waste-types" type="checkbox" value="waste-animal">
                                    Waste from animal carcasses
                                </Radio>
                                <Radio id="waste-type-2" name="waste-types" type="checkbox" value="waste-mines">
                                    Waste from mines or quarries
                                </Radio>

                                <Radio id="waste-type-2" name="waste-types" type="checkbox" value="waste-home">
                                    Household waste
                                </Radio>

                            </RadioGroup>

                        </fieldset>
                    </form>


                </main>
                <br/>
                <br/>
            </Govuk>
        )
    }


}

