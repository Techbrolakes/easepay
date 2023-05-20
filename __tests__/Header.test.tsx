import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header Component', () => {
   test('renders logo and menu links', () => {
      render(<Header />);

      // Assert the logo is rendered
      const logoIcon = screen.getByTestId('logo-icon');
      expect(logoIcon).toBeInTheDocument();
   });

   test('handles show and hide functionality', () => {
      render(<Header />);

      // Assert initial state
      const initialShowState = screen.getByTestId('show-state');
      expect(initialShowState).toHaveTextContent('true');

      // Trigger the hide functionality
      const cancelButton = screen.getByTestId('cancel-button');
      fireEvent.click(cancelButton);

      // Assert updated state
      const updatedShowState = screen.getByTestId('show-state');
      expect(updatedShowState).toHaveTextContent('false');
   });
});
