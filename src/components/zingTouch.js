/* @flow */
import React, { PureComponent, cloneElement, createRef, type Node } from 'react';
import { Region } from 'zingtouch';
import capitalize from '../util/capitalize';

type ZingTouchCallback = CustomEvent => void;

type Props = {
    children: Node,
    onExpand?: ZingTouchCallback,
    onPan?: ZingTouchCallback,
    onPinch?: ZingTouchCallback,
    onSwipe?: ZingTouchCallback,
    onTap?: ZingTouchCallback,
};

type State = {
    region: ?{
        bind: (HTMLElement, string, Function, ?boolean) => void,
        register: (string, any) => void,
    },
};

function shouldPassRegionToChild(child) {
    return typeof child.type === 'function';
}

export default class ZingTouch extends PureComponent<Props, State> {
    state = { region: null };
    touchContainer = createRef();

    processChild = (child: Node, index: number = 0) => {
        return shouldPassRegionToChild(child)
            ? cloneElement(child, {
                  zingTouchRegion: this.state.region,
                  key: `zingtouch-child-${index}`,
              })
            : child;
    };

    componentDidMount() {
        const { current } = this.touchContainer;
        if (current) {
            this.setState({ region: new Region(current, false, false) }, () => {
                const { region } = this.state;
                if (region) {
                    ['swipe', 'tap', 'pan', 'expand', 'pinch'].forEach(eventName => {
                        const callback = this.props[`on${capitalize(eventName)}`];
                        if (callback) {
                            region.bind(current, eventName, callback);
                        }
                    });
                }
            });
        }
    }

    render() {
        const { children, onSwipe, onTap, onPan, onExpand, onPinch, ...props } = this.props;
        const processedChildren = Array.isArray(children)
            ? children.map(this.processChild)
            : this.processChild(children);
        return (
            <div ref={this.touchContainer} {...props}>
                {processedChildren}
            </div>
        );
    }
}
