/* @flow */
import React, { PureComponent, cloneElement, createRef, type Node } from 'react';
import { Region, Tap } from 'zingtouch';
import capitalize from '../util/capitalize';

type ZingTouchCallback = CustomEvent => void;

type Props = {
    children: Node,
    onSwipe?: ZingTouchCallback,
    onTap?: ZingTouchCallback,
    onDoubleTap?: ZingTouchCallback,
    onPinch?: ZingTouchCallback,
    onExpand?: ZingTouchCallback,
};

type State = {
    region: ?{
        bind: (HTMLElement, string, Function, boolean) => void,
        register: (string, any) => void,
    },
};

const doubleTap = new Tap({
    numInputs: 2,
});

export default class ZingTouch extends PureComponent<Props, State> {
    state = { region: null };
    touchContainer = createRef();

    get shouldPassRegion() {
        return typeof this.props.children.type === 'function';
    }

    componentDidMount() {
        const { current } = this.touchContainer;
        if (current) {
            this.setState({ region: new Region(current) }, () => {
                const { region } = this.state;
                if (region) {
                    region.register('doubleTap', doubleTap);
                    ['swipe', 'tap', 'doubleTap', 'pinch', 'expand'].forEach(eventName => {
                        const callback = this.props[`on${capitalize(eventName)}`];
                        if (callback) {
                            region.bind(current, eventName, callback, true);
                        }
                    });
                }
            });
        }
    }

    render() {
        const children = this.shouldPassRegion
            ? cloneElement(this.props.children, { zingTouchRegion: this.state.region })
            : this.props.children;
        return <div ref={this.touchContainer}>{children}</div>;
    }
}
