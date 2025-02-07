"use client";

import { useRouter } from "next/navigation";
import useUsersS from "../Components/Hooks/useUserS";
import { User } from "../Components/Hooks/useUserS";
import useUser from "../Components/Hooks/useUser";

const customerPortalLink =
  "https://billing.stripe.com/p/login/test_dR6dQQ02Ndg6auAfYY";

const CustomerPortal = () => {
  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser();
  const currentUser = users?.filter(
    (user) => user.user_id === loggedInUser.user?.id
  );

  const userEmail = currentUser?.map((user: User) => user.email);

  const handleClick = () => {
    if (userEmail) {
      window.open(
        `${customerPortalLink}?prefilled_email=${userEmail}`,
        "_blank"
      );
    } else {
      alert("You need to be logged in to access billing.");
    }
  };

  return (
    <p onClick={handleClick}>
      Manage Subscribtion
    </p>
  );
};

export default CustomerPortal;
