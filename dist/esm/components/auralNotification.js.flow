/* @flow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeAural } from '../actions/auralNotificationActions';

type Props = {
    notification: string,
    removeAural: () => void,
    duration: number,
};

export class AuralNotification extends PureComponent<Props> {
    static defaultProps = {
        duration: 5000,
    };

    componentDidUpdate() {
        const { removeAural, duration } = this.props;
        setTimeout(removeAural, duration);
    }

    render() {
        const { notification } = this.props;
        return (
            <div className="aural aural-notification" aria-live="assertive" aria-atomic>
                {notification && <span>{notification}</span>}
            </div>
        );
    }
}

export default connect(
    ({ auralNotification }) => ({ notification: auralNotification }),
    { removeAural }
)(AuralNotification);
