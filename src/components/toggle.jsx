import lightThemeImg from '../images/icon-sun.svg'
import darkThemeImg from '../images/icon-moon.svg'

const TOGGLE = (props) => {

    return(
        <div className='flex justify-between items-baseline mt-12'>
            <div className="text-light-100 font-semibold text-4xl mobile:text-2xl tracking-[0.4em]">TODO</div>
            <div>
                <img id='themeIcon' className='cursor-pointer mobile:w-6' src={props.themeChangeValue ? darkThemeImg: lightThemeImg} onClick={props.themeChangeFunc} alt="theme icon" />
            </div>
        </div>
    )
}

export default TOGGLE