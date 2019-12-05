/* @flow */
import React, { PureComponent, cloneElement, createRef, type Node } from 'react';
import { Region, Swipe } from 'zingtouch';
import capitalize from '../util/capitalize';

type ZingTouchCallback = CustomEvent => void;

type Props = {
    children: Node,
    onExpand?: ZingTouchCallback,
    onPan?: ZingTouchCallback,
    onPinch?: ZingTouchCallback,
    onSwipe?: ZingTouchCallback,
    onTap?: ZingTouchCallback,
    capture?: boolean,
    preventDefault?: boolean,
};

type State = {
    region: ?{
        bind: (HTMLElement, string, Function, ?boolean) => void,
        register: (string, any) => void,
    },
};

const escapeVelocity = /Chrome/.test(navigator.userAgent) ? 0.15 : 0.25;

function shouldPassRegionToChild(child) {
    return typeof child.type === 'function';
}

export default class ZingTouch extends PureComponent<Props, State> {
    static defaultProps = {
        capture: false,
        preventDefault: false,
    };
    state = { region: null };
    touchContainer = createRef<HTMLDivElement>();

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
        const { capture, preventDefault, onSwipe } = this.props;
        if (current) {
            this.setState({ region: new Region(current, capture, preventDefault) }, () => {
                const { region } = this.state;
                if (region) {
                    ['tap', 'pan', 'expand', 'pinch'].forEach(eventName => {
                        const callback = this.props[`on${capitalize(eventName)}`];
                        if (callback) {
                            region.bind(current, eventName, callback);
                        }
                    });
                    if (onSwipe) {
                        region.register('quickswipe', new Swipe({ escapeVelocity }));
                        region.bind(current, 'quickswipe', onSwipe);
                    }
                }
            });
        }
    }

    render() {
        const {
            children,
            onSwipe,
            onTap,
            onPan,
            onExpand,
            onPinch,
            capture,
            preventDefault,
            ...props
        } = this.props;
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
