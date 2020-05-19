import '../styles/style.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-140464182-3')

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', url => {
  NProgress.done()
  ReactGA.pageview(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp