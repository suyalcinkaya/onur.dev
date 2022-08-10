// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_BUILDER_PUBLIC_API_KEY, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const sendEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
