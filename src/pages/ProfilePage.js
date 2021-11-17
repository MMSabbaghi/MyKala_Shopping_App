import { useAuth } from "../context/AuthProvider/Provider";

const ProfilePage = () => {
  const userData = useAuth();

  return (
    <>
      <h1> پروفایل شما </h1>
      <p>{userData.name}</p>
    </>
  );
};

export default ProfilePage;
