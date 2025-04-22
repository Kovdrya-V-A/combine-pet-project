
import * as style from './Header.module.scss';
import { ETheme } from '../../theme/ThemeContext';
import { useTheme } from '../../theme/useTheme';

interface IProps {

}

const Header = () => {
    const {toggleTheme, theme} = useTheme()
    return (
        <div className={style.wrapper}>
            <div className={style.logoBar}>
                
            </div>

            <div className={style.btnsBar}>
                <button onClick={() => toggleTheme(ETheme.LIGHT)}>Light</button>
                <button onClick={() => toggleTheme(ETheme.DARK)}>Dark</button>
            </div>
        </div>
    );
}

export default Header;