import '../styles/style.css'
import Router from 'next/router'
import NProgress from 'nprogress'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-140464182-3', { debug: true })

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
  ReactGA.pageview(url)
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp