import * as React from 'react';

export const useMountEffect = (fn) => React.useEffect(fn, []);
