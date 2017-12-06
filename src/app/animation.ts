import {
    trigger,
    state,
    animate,
    style,
    transition
} from '@angular/core';

export const animation = trigger('cardAnimation', [
    state('small', style({
        transform: 'scale(1)',
    })),
    state('large', style({
        transform: 'scale(1)',
    })),

    transition('small <=> large', animate('1000ms ease-in')),
]);
