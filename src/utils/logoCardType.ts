import VisaLogo from '../assets/logo/visa.png';
import MastercardLogo from '../assets/logo/mastercard.png';
import AmexLogo from '../assets/logo/american-express.png';
import DinersLogo from '../assets/logo/diners-club.png';
import DiscoverLogo from '../assets/logo/discover.png';
import JcbLogo from '../assets/logo/jcb.png';
import UnionpayLogo from '../assets/logo/unionpay.png';
import MaestroLogo from '../assets/logo/maestro.png';
import MirLogo from '../assets/logo/mir.png';
import EloLogo from '../assets/logo/elo.png';
import HiperLogo from '../assets/logo/hiper.png';
import HipercardLogo from '../assets/logo/hipercard.png';

const logos = {
  visa: VisaLogo,
  mastercard: MastercardLogo,
  'american-express': AmexLogo,
  'diners-club': DinersLogo,
  discover: DiscoverLogo,
  jcb: JcbLogo,
  unionpay: UnionpayLogo,
  maestro: MaestroLogo,
  mir: MirLogo,
  elo: EloLogo,
  hiper: HiperLogo,
  hipercard: HipercardLogo,
} as any;

const logoCardType = (type: string): any => logos[type];

export default logoCardType;