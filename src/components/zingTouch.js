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

function shouldPassRegionToChild(child) {
    return typeof child.type === 'function';
}

export default class ZingTouch extends PureComponent<Props, State> {
    state = { region: null };
    touchContainer = createRef();

    processChild = (child: Node) => {
        return shouldPassRegionToChild(child)
            ? cloneElement(child, { zingTouchRegion: this.state.region })
            : child;
    };

    componentDidMount() {
        const { current } = this.touchContainer;
        if (current) {
            this.setState({ region: new Region(current) }, () => {
                const { region } = this.state;
                if (region) {
                    region.register('doubleTap', doubleTap);
                    ['swipe', 'tap', 'doubleTap', 'expand', 'pinch'].forEach(eventName => {
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
        const { children } = this.props;
        const processedChildren = Array.isArray(children)
            ? children.map(this.processChild)
            : this.processChild(children);
        return <div ref={this.touchContainer}>{processedChildren}</div>;
    }
}
