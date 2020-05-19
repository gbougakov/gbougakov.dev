import '../styles/style.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import ReactGA from 'react-ga'
import { useEffect } from 'react'
ReactGA.initialize('UA-140464182-3')

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', url => {
  NProgress.done()
  ReactGA.set({ page: url })
  ReactGA.pageview(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp