import {describe, beforeAll, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Modal as Scenario} from './index';
// import userEvent from '@testing-library/user-event';

describe('Modal', () => {
    const mockClose = vi.fn();
  
    beforeAll(() => {
      mockClose.mockReset()
    });
    
    const props = {
        isOpen:true,
        onClose:mockClose,
        title:"Testing the title",
        children:<p>testing children in modal</p>
    };
    
    test('renders modal with expected controls', () => {
      render(<Scenario {...props}/>);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByRole('heading')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });
    
    // describe('when passed onClose handler', () => {
    //   test('calls onClose action when pressing the ESC key', () => {
    //     render(<Scenario {...testingProps} />);
    //     fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
    //     expect(mockClose).toHaveBeenCalledTimes(1);
    //   });
  
    //   test('renders dismissible button that calls onClose action when clicked', async () => {
    //     const { user } = renderWithUser(<Scenario onClose={mockClose} />);
    //     const closeButton = screen.getByRole('button', { name: /close/i });
    //     await user.click(closeButton);
    //     expect(mockClose).toHaveBeenCalledTimes(1);
    //   });
  
    //   test('calls onClock action when clicking outside of the modal', async () => {
    //     const { user } = renderWithUser(<Scenario data-testid="mockId" onClose={mockClose} />);
    //     const scrimElement = screen.getByTestId('mockId');
    //     await user.click(scrimElement);
    //     expect(mockClose).toHaveBeenCalledTimes(1);
    //   });
    // });
});

  