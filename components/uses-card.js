import ThemeAwareImg from '../components/theme-aware-img'
const UsesCard = props => {
  return <div>
    <div className="flex mt-4 md:mt-6 items-center">
      <ThemeAwareImg darkSrc={props.darkSrc} lightSrc={props.lightSrc} className="h-6"></ThemeAwareImg>
      <h3 className="text-2xl md:text-3xl font-bold leading-none ml-2">
        {props.title}
      </h3>
    </div>
    <p className="mt-1 md:mt-2">{props.children}</p>
    <p className="mt-1 md:mt-2 font-medium">
      <a className="accent-text" href={props.href}>Website →</a>
    </p>
  </div>
}

export default UsesCard
