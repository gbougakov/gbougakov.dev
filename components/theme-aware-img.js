const ThemeAwareImg = props => {
  return <span>
    <img src={props.darkSrc} className={"hidden dark-mode:inline " + props.className}></img>
    <img src={props.lightSrc} className={"dark-mode:hidden " + props.className}></img>
  </span>
}

export default ThemeAwareImg
