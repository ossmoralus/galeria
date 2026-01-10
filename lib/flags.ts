import { statsigAdapter, type StatsigUser } from '@flags-sdk/statsig';
import { flag } from 'flags/next';
import type { Identify } from 'flags';

export const identify: Identify<StatsigUser> = async () => {
  await Promise.resolve();
  return {
    userID: '1234'
  };
};

export const createFeatureFlag = (key: string) =>
  flag<boolean, StatsigUser>({
    key,
    adapter: statsigAdapter.featureGate((gate) => gate.value, { exposureLogging: true }),
    identify
  });
