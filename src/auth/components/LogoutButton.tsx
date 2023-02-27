import { useMutation } from "@blitzjs/rpc";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import logout from '../../auth/mutations/logout';

export const LogoutButton =  () => {
  const router = useRouter();
  const [logoutUser] = useMutation(logout);
  const handleLogout = async () => {
    try {
      await logoutUser();
      await router.replace('/');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return (
    <Icon
      onClick={handleLogout}
      icon="material-symbols:logout"
      width={24}
      height={24}
    />
  );
};
