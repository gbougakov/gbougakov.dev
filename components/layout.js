import Link from 'next/link'
import {useRouter} from 'next/router'
import '../styles/style.css'

const Layout = props => {
  const router = useRouter()

  return <div id="app">
    {/* <div className="flex justify-center px-10 md:px-20 pt-10 -mx-2 flex-wrap">
      <div className="px-2">
        <Link href="/">
          <a className={`nav-router-link ${router.pathname === '/' ? 'nav-router-link-active' : ''}`}>Home</a>
        </Link>
      </div>
      <div className="px-2">
        <Link href="/projects">
          <a className={`nav-router-link ${router.pathname === '/projects' ? 'nav-router-link-active' : ''}`}>Projects</a>
        </Link>
      </div>
      <div className="px-2">
        <Link href="/donate">
          <a className={`nav-router-link ${router.pathname === '/donate' ? 'nav-router-link-active' : ''}`}>Donate</a>
        </Link>
      </div>
    </div> */}
    <div className="antialiased p-10 md:p-20">
      <div className="flex items-center justify-center">
        <div className="md:flex w-full lg:w-2/3 items-center">
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

export default Layout
