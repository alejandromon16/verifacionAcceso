import { FC, useState } from "react";
import styles from "../styles/BottomNavBar.module.css"
import Link from "next/link"
import { LogoutButton } from "src/auth/components/LogoutButton";
import { Icon } from '@iconify/react';

interface Props {
  activeButton: number;
  onButtonClick: (buttonIndex: number) => void;
}

const BottomNavBar: FC<Props> = ({ activeButton, onButtonClick }) => {
  const [buttons] = useState([
    { label: "EnrolledPeople", icon: "mdi:user-details", path: "/enrolled-people" },
    { label: "Home", icon: "mdi:user-check", path: "/admin" },
  ]);

  return (
    <nav className={styles.nav}>
      {buttons.map((button, index) => (
          <Link
            key={index}
            className={index === activeButton ? styles.active : styles.notActive}
            onClick={() => onButtonClick(index)} 
            href={button.path}         
            > 
              <Icon 
                icon={button.icon} 
                width={24}
                height={24}
                fontWeight={700}
                inline={true}
              />
            </Link>
      ))}
      <LogoutButton />
    </nav>
  );
};

export default BottomNavBar;
