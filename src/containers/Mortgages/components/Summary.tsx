import React, { FC } from 'react';

interface ISummary {
    value: string | React.ReactNode;
    suffix: string | React.ReactNode;
    description: string | React.ReactNode;
}

export const Summary: FC<ISummary> = ({
    value = '',
    suffix = '',
    description = '',
}) => {
    return (
        <div className="summary">
            <span className="value">{value}</span>
            <span className="suffix">{suffix}</span>
            <div className="des">{description}</div>
        </div>
    );
};
