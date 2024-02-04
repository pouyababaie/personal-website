import { render } from '@testing-library/react';

import SrcModulesSharedUi from './src-modules-shared--ui';

describe('SrcModulesSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SrcModulesSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
