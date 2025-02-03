import useUsersS from "../Components/Hooks/useUserS";
import { User } from "../Components/Hooks/useUserS";
import useUser from "../Components/Hooks/useUser";

const Delivery = () => {
  const { users, loading, error } = useUsersS();
  const loggedInUser = useUser();
  const currentUser = users?.filter(
    (user) => user.user_id === loggedInUser.user?.id
  );
  return (
    <div>
      {currentUser?.map((user: User) => (
        <p key={user.user_id}>
          {user.shipping_address} {user.issubscribed}
        </p>
      ))}
    </div>
  );
};

export default Delivery;
