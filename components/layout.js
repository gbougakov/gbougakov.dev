import Link from 'next/link'
import {useRouter} from 'next/router'

const Layout = props => {
  const router = useRouter()

  return <div id="app">
    <div className="p-10 antialiased md:p-20">
      <div className="flex items-center justify-center">
        <div className="items-center w-full md:flex lg:w-2/3">
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

export default Layout
