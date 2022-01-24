import React, { useState } from 'react';
import { GlobalStyle, Container } from '../layout/global-style';
import {
    Card,
    CardHeader,
    ThcCbdTitleFieldset,
    CardBody,
    NameFieldset,
} from "../Card/index";
import { connect } from "react-redux";
import store from "../store";
import { action } from "../modules/actions";
import {
    ExperienceContainer,
    Title,
    CardDiv
} from "./index";

const Quakes = (props) => {
    const { quakes } = props;
    const [card, flipCard] = useState(false);

    if (quakes.length <= 0) {
        return null;
    }

    return (
        <ExperienceContainer>
            <Title>
                Earthquakes
            </Title>
            <a
                href="#"
                onClick={e => {
                    action("REFRESH_QUAKES");
                }}
            >
                [refresh]
            </a>
            <CardDiv>
                {quakes.map((quake, idx) => {
                    const {
                        properties: { detail, title, mag, type, alert, tsunami },
                    } = quake;
                    return card ? (
                        <Card>
                            <CardBody
                                onClick={() => flipCard(false)}
                                role="contentInfo"
                                aria-pressed="false"
                                aria-label="Product Card with a Image and a list of price, type of strain, thc and cbd levels."
                            >
                                <CardHeader
                                    role="img"
                                    aria-label="Description of the Product image"
                                >
                                    <NameFieldset aria-label="title" href={detail}>
                                        {title}
                                    </NameFieldset>
                                </CardHeader>
                            </CardBody>
                        </Card>
                    ) : (
                        <Card>
                            <CardBody onClick={() => flipCard(true)}>
                                <CardHeader
                                    role="img"
                                    aria-label="Description of the overall image"
                                >
                                    <NameFieldset aria-label="title">Backend</NameFieldset>
                                </CardHeader>
                                <ThcCbdTitleFieldset aria-label="description">
                                    Magnitude: {mag}
                                </ThcCbdTitleFieldset>
                                <ThcCbdTitleFieldset aria-label="description">
                                    Type: {type}
                                </ThcCbdTitleFieldset>
                                <ThcCbdTitleFieldset aria-label="description">
                                    Alert:  {alert}
                                </ThcCbdTitleFieldset>
                                <ThcCbdTitleFieldset aria-label="description">
                                    Tsunami Level Threat:  {tsunami}
                                </ThcCbdTitleFieldset>
                            </CardBody>
                        </Card>
                    );

                })}
            </CardDiv>
        </ExperienceContainer>
    )
}

const mapStateToProps = store => {
    return {
        quakes: store.myState.get("quakes").toJS(),
    };
};

export default connect(mapStateToProps)(Quakes);
