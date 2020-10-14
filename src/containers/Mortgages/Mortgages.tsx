import React from 'react';

import {
    Container,
    Input,
    Label,
    Dropdown,
    Pagination,
    Grid,
} from 'semantic-ui-react';
import { List } from './components/List';

import { useMortgages } from './hooks';

import { termOptions } from 'src/helper';

export const Mortgages = () => {
    const {
        rates,
        onTotalChange,
        onDepositChange,
        onTermChange,
        calculatorParams: { total, deposit, term },
    } = useMortgages();

    return (
        <div className="App">
            <div className="results">
                <Container className="banner">
                    <Input
                        className="input"
                        labelPosition="right"
                        placeholder="5000000"
                    >
                        <Label className="description">House Price</Label>
                        <input
                            name="House Price"
                            onChange={(e) => onTotalChange(e.target.value)}
                            value={total}
                        />
                        <Label>$</Label>
                    </Input>
                    <Input
                        className="input"
                        labelPosition="right"
                        placeholder="20"
                    >
                        <Label className="description">Deposit</Label>
                        <input
                            name="House Price"
                            onChange={(e) => onDepositChange(e.target.value)}
                            value={deposit}
                        />
                        <Label>%</Label>
                    </Input>
                    <div className="dropdown">
                        <Dropdown
                            text={term.text}
                            icon="caret down"
                            labeled
                            button
                            className="icon"
                            selection
                            options={termOptions}
                            onChange={(_, option) => {
                                console.log(option);
                                onTermChange(option);
                            }}
                        />
                    </div>
                    <div className="dropdown">
                        <Dropdown
                            text="Filter By"
                            icon="filter"
                            labeled
                            button
                            className="icon"
                        />
                    </div>
                </Container>
            </div>
            <Container className="lists">
                {rates.map((rate) => (
                    <List rate={rate} />
                ))}
            </Container>
            <Container className="pagination">
                <Grid divided="vertically">
                    <Grid.Row>
                        <Grid.Column>
                            <Pagination
                                defaultActivePage={1}
                                totalPages={1}
                                onPageChange={() => {
                                    return;
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};
