import * as React from 'react';

import { Theme } from './Theme';
import GlobalStyles from './GlobalStyles';
import Fonts from './fonts';

interface ProviderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Theme>
      <Fonts />
      <GlobalStyles />
      {children}
    </Theme>
  );
};

Provider.displayName = 'Provider';

export const Reset: React.FC<ProviderProps> = ({ ...rest }) => <Provider {...rest} />;

export default Provider;
