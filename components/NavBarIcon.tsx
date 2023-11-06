import { cloneElement } from 'react';

interface NavBarButtonProps {
  children: JSX.Element;
  name: string;
  isCurrentPage: boolean;
  handleClickButton?: () => void;
}

const NavBarButton = ({
  children,
  name,
  isCurrentPage,
  handleClickButton,
}: NavBarButtonProps) => {
  const iconColor = isCurrentPage ? '#ffffff' : '#8C8787';
  const fontColor = isCurrentPage ? 'text-white' : 'text-[#8C8787]';
  return (
    <button
      onClick={handleClickButton}
      className={`${fontColor} text-[8px] flex flex-col items-center`}
    >
      {cloneElement(children, { color: iconColor })}
      <p>{name}</p>
    </button>
  );
};

export default NavBarButton;
