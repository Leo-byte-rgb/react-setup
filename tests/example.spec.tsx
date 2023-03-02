import React from 'react';
import { describe, expect, it, test } from 'vitest';
import { render, fireEvent, getByTestId, screen } from '@testing-library/react';
import App from '../src/App';

test('Counter should start with "0" on first render', () => {
	render(<App />);
	expect(screen.getByText('count is 0')).toBeDefined();
});

test('Counter should increment the value after click', () => {
	render(<App />);

	fireEvent(screen.getByText('count is 0'), new MouseEvent('click', { bubbles: true }));
	expect(screen.getByText('count is 1')).toBeDefined();
});
