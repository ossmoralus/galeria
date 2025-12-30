import { Redis } from '@upstash/redis';

let redisSingleton: Redis | null = null;

export function getVisitorsRedis(): Redis {
  if (redisSingleton !== null) return redisSingleton;
  redisSingleton = Redis.fromEnv();
  return redisSingleton;
}

export function normalizeVisitorId(rawId: string): string | null {
  const id = rawId.trim();

  // ids curtos e previsíveis para evitar abuso/keys gigantes.
  if (id.length < 1 || id.length > 64) return null;
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) return null;

  return id;
}

export function visitorKey(id: string): string {
  return `visitors:${id}`;
}
