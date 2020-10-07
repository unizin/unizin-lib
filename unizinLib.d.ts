declare module 'unizin-lib' {
    function openConfirmationModal(a: any): (d: Function, g: () => {}) => any;
    function addAural(s: string): any;
    function removeAural(): void;
    function relativeDate(s: string | Date, now?: Date): string | null;

    declare namespace notificationActions {
        type NotificationParam = {
            callToAction?: string;
            dismissable?: boolean;
            icon: string;
            onCallToAaction?: () => void;
            text: string;
            top?: boolean;
            timeout?: number;
        };
        function showNotification(p: NotificationParam): (a: any) => Promise<number>;
        function removeNotification(n: number): Promise<void>;
    }

    export class AuralNotification extends React.Component<{}> {}
    export class ModalContainer extends React.Component<{}> {}
    export class NotificationContainer extends React.Component<{}> {}
    export class Loading extends React.Component<{ message?: string }> {}
    export class ButtonAddRemove extends React.Component<{
        triggerBoolean: boolean;
        isSmall?: boolean;
        handleOnClick?: () => void;
        title?: string;
    }> {}
    export class Pagination extends React.Component<{
        page: number;
        pageCount: number;
        hasNext: boolean;
        changePage: (n: number) => void;
    }> {}
    export class Tooltip extends React.Component<{ message: React.ReactNode }> {}
    export class Toggle extends React.Component<{
        checked: boolean;
        color?: string;
        disabled: boolean;
        height?: string | number;
        onChange: (e: MouseEvent) => Promise<any>;
    }> {}
    export class ToggleHandle extends React.Component<{
        expanded: boolean;
        onClick?: React.MouseEventHandler;
    }> {}
    export class Spinner extends React.Component<{
        color?: string;
        stroke?: string;
        width?: string;
    }> {}
    export class CloseButton extends React.Component<any> {}
    export class Avatar extends React.Component<{ email: string; name: string }> {}
    export class FocusTrap extends React.PureComponent<{
        children: React.Node;
        className?: string;
        setModalOnClose?: (f: (e: HTMLElement) => void) => void;
    }> {}

    function auralNotificationReducer<T>(s: T, a: any): T;
    function notificationReducer<T>(s: T, a: any): T;
    function modalReducer<T>(s: T, a: any): T;
}
