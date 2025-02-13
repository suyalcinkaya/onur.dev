import { LRUCache } from 'lru-cache'

export default function rateLimit(options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000
  })

  return {
    check: (limit, token) => {
      if (!token) {
        return Promise.reject(new Error('Token is required'))
      }

      const tokenCount = tokenCache.get(token) || [0]
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount)
      }
      tokenCount[0] += 1

      const currentUsage = tokenCount[0]
      const isRateLimited = currentUsage >= limit
      const remaining = Math.max(0, limit - currentUsage)

      return isRateLimited
        ? Promise.reject({
            error: 'Rate limit exceeded',
            limit,
            currentUsage,
            remaining,
            timeWindow: options?.interval || 60000
          })
        : Promise.resolve({
            limit,
            currentUsage,
            remaining,
            timeWindow: options?.interval || 60000
          })
    }
  }
}
