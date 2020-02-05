import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Tilt from 'react-tilt'

const JumboLink = props => {
  return <a href={props.href}>
    <Tilt className={`${props.txColor} p-5 h-full rounded items-center text-white shadow-lg flex items-center`} options={{ max : 25, scale: 1.05 }} >
      <div className={'flex tilt-inner items-center'}>
        <span>
          <FontAwesomeIcon icon={props.icon} size="lg" className="w-8"></FontAwesomeIcon>
        </span>
        <div className="ml-4">
          <h1 className="text-xl font-bold leading-snug">{props.title}</h1>
          <p className="leading-snug tracking-tight">{props.description}</p>
        </div>
      </div>
    </Tilt>
  </a>
}

export default JumboLink
