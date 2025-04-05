import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faChartLine, 
  faDesktop, 
  faClock, 
  faFileExport,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebook,
  faYoutube,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'

// 사용할 아이콘 등록
library.add(
  // Solid 아이콘
  faChartLine, 
  faDesktop, 
  faClock, 
  faFileExport,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faExternalLinkAlt,
  // Brand 아이콘
  faLinkedin,
  faXTwitter,
  faFacebook,
  faYoutube
)

export { FontAwesomeIcon }