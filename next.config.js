module.exports = {
  compiler: {
    removeConsole: {
      exclude: ['error', 'info']
    }
  },
  trailingSlash: false,
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280]
  },
  async redirects() {
    return [
      {
        source: '/turkiyeden-gitmek-berline-uzanan-bir-goc-hikayesi-bolum-1-nedenler',
        destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek',
        permanent: true
      },
      {
        source: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek-bolum-1-nedenler',
        destination: '/writing/bir-yazilimci-olarak-turkiyeden-gitmek',
        permanent: true
      },
      {
        source: '/what-i-have-learned-from-working-with-html5-video-over-a-month',
        destination: '/writing/what-i-have-learned-from-working-with-html5-video-over-a-month',
        permanent: true
      },
      {
        source: '/useFetch-react-hook',
        destination: '/writing/useFetch-react-hook',
        permanent: true
      },
      {
        source: '/understanding-react-memo',
        destination: '/writing/understanding-react-memo',
        permanent: true
      },
      {
        source: '/blog/:slug',
        destination: '/writing/:slug',
        permanent: true
      },
      {
        source: '/bookmarks/18259129',
        destination: '/bookmarks/apps-and-tools',
        permanent: true
      },
      {
        source: '/bookmarks/15968768',
        destination: '/bookmarks/design',
        permanent: true
      },
      {
        source: '/bookmarks/23598938',
        destination: '/bookmarks/fonts',
        permanent: true
      },
      {
        source: '/bookmarks/16949672',
        destination: '/bookmarks/frontend',
        permanent: true
      },
      {
        source: '/bookmarks/15807896',
        destination: '/bookmarks/portfolio',
        permanent: true
      },
      {
        source: '/bookmarks/15807897',
        destination: '/bookmarks/reading',
        permanent: true
      },
      {
        source: '/bookmarks/15896982',
        destination: '/bookmarks/tweets',
        permanent: true
      },
      {
        source: '/bookmarks/15969648',
        destination: '/bookmarks/vs-code',
        permanent: true
      },
      {
        source: '/bookmarks/25589709',
        destination: '/bookmarks/wallpapers',
        permanent: true
      },
      {
        source: '/bookmarks/16338467',
        destination: '/bookmarks/websites',
        permanent: true
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@supabase/supabase-js', 'react-tweet'],
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP']
  }
}

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'onur-jc',
    project: 'website'
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true
  }
)
