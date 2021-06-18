import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { render as renderTL } from '@testing-library/react';

import AppleBasket from './AppleBasket';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Le panier de pomme est fonctionnel', () => {
    test(`Le bouton "Ajouter une pomme" s'affiche`, () => {
        act(() => {
            render(<AppleBasket />, container);
        });

        expect(container.querySelector('button').textContent).toBe('Ajouter une pomme');
    });

    test(`La liste de pomme s'affiche`, () => {
        act(() => {
            render(<AppleBasket />, container);
        });

        expect(container.querySelector('.appleBasket-list')).not.toBeNull();
    });

    describe(`Au clic sur le bouton "Ajouter une pomme"...`, () => {
        test(`... une pomme apparaît dans le panier`, () => {
            act(() => {
                render(<AppleBasket />, container);
            });

            const button = container.querySelector('button');

            act(() => {
                button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            });

            expect(container.querySelectorAll('.apple').length).toBe(1);
        });

        test(`... une pomme apparaît dans le panier et au click sur la pomme, elle disparaît`, () => {
            act(() => {
                render(<AppleBasket />, container);
            });

            const button = container.querySelector('button');

            act(() => {
                button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            });

            const apple = container.querySelector('.apple img');

            act(() => {
                apple.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            });

            expect(container.querySelectorAll('.apple').length).toBe(0);
        });
    });
});

// describe('Le panier de pomme est fonctionnel (sans container)', () => {
//     test(`Le bouton "Ajouter une pomme" s'affiche`, () => {
//         const { getByText } = renderTL(<AppleBasket />);
//         expect(getByText('Ajouter une pomme')).toBeInTheDocument();
//     });
// });
