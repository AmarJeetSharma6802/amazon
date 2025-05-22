import React, { Suspense } from 'react';
import Refrigerators from './Refrigerators';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading component...</div>}>
      <Refrigerators/>
    </Suspense>
  );
}
