import React, { Suspense } from 'react';
import Refrigerators from './Refrigerators';

export const metadata = {
  title: 'Laptop , computer | amazon.in',
  description: 'Browse all refrigerators from top brands',
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading component...</div>}>
      <Refrigerators/>
    </Suspense>
  );
}
