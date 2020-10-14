import React from 'react';

import { Dropdown, Grid, Image } from 'semantic-ui-react';
import { Summary } from './Summary';

import { useCalculator } from '../hooks';

const frequencyOptions = [
    {
        key: 'Monthly',
        text: 'Monthly Payment',
        value: 'Monthly',
    },
    {
        key: 'Weekly',
        text: 'Weekly Payment',
        value: 'Weekly',
    },
    {
        key: 'Fornightly',
        text: 'Fornightly Payment',
        value: 'Fornightly',
    },
];

export const Card = ({ logo = '', minRate, name, rates }) => {
    const {
        payment,
        interest,
        rateOptions,
        setRate,
        setType,
    } = useCalculator(rates, minRate);

    return (
        <Grid textAlign="center" verticalAlign="middle" divided="vertically">
            <Grid.Row columns={4}>
                <Grid.Column>
                    {logo ? <Image src={logo} /> : <span>{name}</span>}
                </Grid.Column>
                <Grid.Column>
                    <Summary
                        value={minRate}
                        suffix="%"
                        description={
                            <Dropdown
                                className="dropdown"
                                inline
                                options={rateOptions}
                                defaultValue={rateOptions[0].value}
                                onChange={(_, { value }) => setRate(value)}
                            />
                        }
                    />
                </Grid.Column>
                <Grid.Column>
                    <Summary
                        value={payment}
                        suffix="$"
                        description={
                            <Dropdown
                                className="dropdown"
                                inline
                                options={frequencyOptions}
                                defaultValue={frequencyOptions[0].value}
                                onChange={(_, { value }) => setType(value)}
                            />
                        }
                    />
                </Grid.Column>
                <Grid.Column>
                    <Summary
                        value={interest}
                        suffix="$"
                        description="Total Interest"
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
