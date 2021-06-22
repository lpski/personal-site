export const pageview = (url) => {
  window['gtag']('config', 'G-9341HVZJ0V', {
    page_path: url,
  })
}

export const clickEvent = ({ action, params }) => {
  window['gtag']('event', action, params)
}