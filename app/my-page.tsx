// app/my-page.tsx — exemplo de uso do feature flag (server)
import type { JSX } from 'react';
import { createFeatureFlag } from '../lib/flags';

export default async function Page(): Promise<JSX.Element> {
  const enabled = await createFeatureFlag('my_first_gate')(); // Disabled by default, edit in the Statsig console
  return <div>myFeatureFlag is {enabled === true ? 'on' : 'off'}</div>;
}

// Note: this is designed for server & middleware - check "Getting Started" for client-side details!
