import React, {Component} from 'react';

import '../../css/help/faq_questions.css';
import CollapseQuestion from './CollapseQuestion';
import axios from "axios";
import {APP_URL_CONFIG} from "../../App.Urls";

export default class FAQs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            toggleMenu: this.toggleMenu,
            faqsList: []
        };
    }

    getFAQs = async () => {
        console.log("URL ", APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.FAQ);
        await axios
            .get(
                APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.FAQ,
                {}
            )
            .then((res) => {
                this.setState({
                    faqsList: res.data["data"],
                });
            });
    };

    componentDidMount() {
        this.getFAQs();
    }

    render() {
        const positionList = this.state.faqsList;
        return (
            <div className="openings">
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <div className="openingHeading">
                    <h2>FAQs</h2>
                </div>
                <div className="openPostions" id="accordion">
                    {positionList.map((item) => (
                        <CollapseQuestion open={item.open} content={item.content} title={item.title} key={item.key}/>
                    ))}
                </div>
            </div>
        );
    }
}
