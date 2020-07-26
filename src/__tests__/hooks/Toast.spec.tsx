import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

import { useToast, ToastProvider } from '../../hooks/Toast';
import Toast from '../../components/ToastContainer';

describe('Toast hook', () => {
  it('should be able to display toast', () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    result.current.addToast({
      title: 'Test Toast',
      description: 'Test Toast Description',
      type: 'info',
    });
  });
});
