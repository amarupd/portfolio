import { useMemo } from 'react';
import { ReactComponent as ToggleDarkIcon } from '../../Assets/toggle-dark.png';
import { ReactComponent as ToggleLightIcon } from '../../Assets/toggle-light.png';
import { useThemeContext } from '../../hooks/themeHook/themeHook';
import Button from '../UIElements/Button/Button';
import s from './BtnToggleTheme.module.css';

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? ToggleDarkIcon : ToggleLightIcon),
    [dark],
  );

  return (
    <Button
      addClass={className}
      onClick={toggleTheme}
      label="theme toggle"
    >
      <ToggleThemeIcon className={s.toggleTheme} />
    </Button>
  );
};

export default BtnToggleTheme;
