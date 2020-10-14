export const fornightlyPayment = (principle, rate, term) => {
    let weeklyRate = rate / 100 / 52;
    weeklyRate = Number(weeklyRate.toFixed(6));
    const number = term * 52;
    const payment =
        2 *
        Math.ceil(
            principle *
                weeklyRate *
                ((1 + weeklyRate) ** number / ((1 + weeklyRate) ** number - 1)),
        );
    const interest = (payment / 2) * number - principle;
    return { payment, interest };
};

export const monthlyPayment = (principle, rate, term) => {
    let monthlyRate = rate / 100 / 12;
    monthlyRate = Number(monthlyRate.toFixed(5));
    const number = term * 12;
    const payment = Math.ceil(
        principle *
            monthlyRate *
            ((1 + monthlyRate) ** number / ((1 + monthlyRate) ** number - 1)),
    );
    const interest = payment * number - principle;
    return { payment, interest };
};

export const weeklyPayment = (principle, rate, term) => {
    let weeklyRate = rate / 100 / 52;
    weeklyRate = Number(weeklyRate.toFixed(6));
    const number = term * 52;
    const payment = Math.ceil(
        principle *
            weeklyRate *
            ((1 + weeklyRate) ** number / ((1 + weeklyRate) ** number - 1)),
    );
    const interest = payment * number - principle;
    return { payment, interest };
};

export const calculator = (total, deposite, rate, term, type) => {
    const principle = total * (1 - deposite / 100);
    let result = {};
    let termInt = 0;
    if (term.match('y')) {
        termInt = parseInt(term.replace('y', ''), 10);
    }
    switch (type.toLowerCase()) {
        case 'fornightly':
            result = fornightlyPayment(principle, rate, termInt);
            break;
        case 'weekly':
            type = 'weekly';
            result = weeklyPayment(principle, rate, termInt);
            break;
        default:
            type = 'monthly';
            result = monthlyPayment(principle, rate, termInt);
            break;
    }
    return result;
};

const getTermOptions = () => {
    const termOptions = [];

    for (let year = 1; year <= 30; year++) {
        termOptions.push({ key: year, text: `${year}y`, value: year });
    }

    return termOptions;
};

export const termOptions = getTermOptions();
