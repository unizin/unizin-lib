/* @flow */
const selector = 'input, a, textarea, select, button, [tabIndex]:not([tabIndex="-1"])';

export function getFocusBounds(element: HTMLElement): Array<?HTMLElement> {
    const focusableChildren = element.querySelectorAll(selector);
    return [focusableChildren[0] || null, focusableChildren[focusableChildren.length - 1] || null];
}

export function getFirstFocusableChild(element: HTMLElement): ?HTMLElement {
    return element.querySelector(selector);
}
