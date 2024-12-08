import {describe, expect, test, vi, beforeEach} from 'vitest';
import {render, screen, fireEvent, RenderResult} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Modal as Scenario} from './index';
import userEvent from '@testing-library/user-event';

function renderWithUser(ui: React.ReactElement): RenderResult & { user: ReturnType<typeof userEvent.setup> } {
  const user = userEvent.setup();
  return {
    user,
    ...render(ui),
  };
}

describe('Modal', () => {
    const mockClose = vi.fn();
  
    beforeEach(() => {
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

    describe('when passed onClose handler', () => {
      test('calls onClose action when pressing the ESC key', () => {
        render(<Scenario {...props} />);
        fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
        expect(mockClose).toHaveBeenCalledTimes(1);
      });
  
      test('renders dismissible button that calls onClose action when clicked', async () => {
        const { user } = renderWithUser(<Scenario {...props} />);
        const closeButton = screen.getByRole('button', { name: /close/i });
        await user.click(closeButton);
        expect(mockClose).toHaveBeenCalledTimes(1);
      });
  
      test('calls onClock action when clicking outside of the modal', async () => {
        const { user } = renderWithUser(<Scenario data-testid="mockId" {...props} />);
        const scrimElement = screen.getByTestId('mockId');
        await user.click(scrimElement);
        expect(mockClose).toHaveBeenCalledTimes(1);
      });
    });
});

  