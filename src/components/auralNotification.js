import React, { PureComponent } from 'react';
import { func, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { removeAural } from '../actions/auralNotificationActions';

export class AuralNotification extends PureComponent {
    static propTypes = {
        notification: string,
        removeAural: func.isRequired,
        duration: number,
    };

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
