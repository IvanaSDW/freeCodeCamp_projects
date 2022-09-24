import fccLogo from '../images/freecodecamp-logo.png';
import '../stylesheets/LogoFCC.css'

const LogoFCC = () => (
    <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo' src={fccLogo} />
    </div>
);

export default LogoFCC
