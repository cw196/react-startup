import React, { useState } from 'react';

import { Container, Segment, Grid, Icon, Accordion } from 'semantic-ui-react';
import { Card } from './Card';

export const List = ({ rate: { name, min, logo, rates } }) => {
    const [expended, setExpended] = useState(false);

    return (
        <Segment.Group className="list">
            <Segment>
                <div className="title">{name}</div>
            </Segment>
            <Segment>
                <Card logo={logo} name={name} minRate={min} rates={rates} />
                <Grid>
                    <Accordion fluid>
                        <Accordion.Title
                            active={expended}
                            onClick={() => setExpended(!expended)}
                        >
                            <Container textAlign="center">
                                <Icon name="dropdown" />
                                More
                            </Container>
                        </Accordion.Title>
                        <Accordion.Content active={expended}>
                            TBC.
                        </Accordion.Content>
                    </Accordion>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="promotion">
                                MoneyHero Exclusive Offer:HK$500 exclusive cash
                                coupons for every HK$1 million loan amount (max
                                rewards: HK$6,000 cash coupons)
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Segment.Group>
    );
};
