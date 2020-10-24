export const GA_TRACKING_ID = 'UA-133559538-1'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
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
