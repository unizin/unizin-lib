/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../theme.js';

const StepButton = styled.button`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    line-height: 24px;
    background: ${theme.colors.blue.default};
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    border: none;
    font-size: ${theme.fonts.sizes.discrete};
`;

const StepNumber = styled.span`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    line-height: 24px;
    font-size: ${theme.fonts.sizes.discrete};

    .active &,
    .completed & {
        color: white;
    }
`;

export type Props = {
    stepNumber: number,
    setStep: Function,
    steps: Array<{ stepNumber: number, stepLabel: string }>,
};

export default class OrderProgressBar extends Component<Props> {
    handleClickStep = (stepNumber: number) => () => {
        this.props.setStep(stepNumber);
    };
    render() {
        let liList = this.props.steps.map(step => {
            const active = step.stepNumber === this.props.stepNumber;
            const completed = step.stepNumber < this.props.stepNumber;
            const activeClass = active ? 'active' : '';
            const completedClass = completed ? 'completed' : '';
            const Step = completed ? StepButton : StepNumber;
            return (
                <li className={activeClass + completedClass} key={step.stepNumber}>
                    <Step
                        onClick={completed ? this.handleClickStep(step.stepNumber) : undefined}
                        className="count"
                    >
                        {active ? <span className="aural">Current: </span> : null}
                        {completed ? <span className="aural">Completed: </span> : null}
                        <span className="aural">step </span>
                        {step.stepNumber + 1}
                    </Step>
                    <span className="bubble" />
                    {step.stepLabel}
                </li>
            );
        });
        return <ul className="progress-indicator">{liList}</ul>;
    }
}
