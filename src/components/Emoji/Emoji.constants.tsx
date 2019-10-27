import React from "react";
import {Options} from "cogo-toast";

export const toastOptions: Options = {
    hideAfter: 2,
    position: 'bottom-center',
    renderIcon: () => <span/>,
    bar: {color: 'var(--border-color-active)'}
};