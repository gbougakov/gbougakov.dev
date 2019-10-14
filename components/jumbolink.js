import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const JumboLink = props => {
  return <a href={props.href}>
    <div className={'flex hover:shadow rounded-lg transition-all items-center p-5 border border-solid h-full ' + props.className}>
      <span>
        <FontAwesomeIcon icon={props.icon} size="lg" className="w-8"></FontAwesomeIcon>
      </span>
      <div className="ml-4">
        <h1 className="text-xl font-bold leading-snug">{props.title}</h1>
        <p className="leading-snug">{props.description}</p>
      </div>
    </div>
  </a>
}

export default JumboLink
