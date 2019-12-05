/* @flow */
import React, { PureComponent, createRef, type Node } from 'react';
import { getFocusBounds } from '../util/focus';

export default class FocusTrap extends PureComponent<{
    children: Node,
    className?: string,
    setModalOnClose?: ((HTMLElement) => void) => void,
}> {
    pauseFocus: ?boolean;

    focusTrap = createRef<HTMLDivElement>();

    componentDidMount() {
        document.addEventListener('keydown', this.tabListener);
        document.addEventListener('focus', this.keepFocus, true);
        this.focusTrap.current && this.focusTrap.current.focus();
        this.setFocusReturn();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.tabListener);
        document.removeEventListener('focus', this.keepFocus, true);
    }

    setFocusReturn = () => {
        const { setModalOnClose } = this.props;
        setModalOnClose &&
            setModalOnClose((e: HTMLElement) => {
                const customFocus = document.createEvent('CustomEvent'); // IE Compatibility (vs. new CustomEvent())
                customFocus.initCustomEvent('focus', true, false, { noTrapFocus: true });
                e.dispatchEvent(customFocus);
            });
    };

    tabListener = (e: KeyboardEvent) => {
        const { current } = this.focusTrap;
        if (current && e.key === 'Tab') {
            const [firstFocusableElement, lastFocusableElement] = getFocusBounds(current);
            if (!e.shiftKey && document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement && firstFocusableElement.focus();
            } else if (e.shiftKey && document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement && lastFocusableElement.focus();
            }
        }
    };

    keepFocus = (e: CustomEvent | FocusEvent) => {
        const { current } = this.focusTrap;
        if (current && !current.contains(e.target) && !this.pauseFocus) {
            if (e.detail.noTrapFocus) {
                this.pauseFocus = true;
                e.target instanceof HTMLElement && e.target.focus();
                this.pauseFocus = false;
            } else {
                current.focus();
            }
        }
    };

    render() {
        const { children, className } = this.props;
        return (
            <div ref={this.focusTrap} className={className} tabIndex="0">
                {children}
            </div>
        );
    }
}
