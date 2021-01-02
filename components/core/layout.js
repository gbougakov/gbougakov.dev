const Layout = props => {
  return <div id="app">
    <div className="px-5 pt-20 pb-48 antialiased md:px-20 md:pt-30 md:pb-64">
      <div className="flex items-center justify-center">
        <div className="items-center w-full md:flex lg:w-2/3">
          {props.children}
        </div>
      </div>
    </div>
  </div>
}

export default Layout
