import { useFetch } from "../../hooks";
import UserSelection from "../UserSelection/UserSelection";
const HomePage = () => {
  useFetch();
  return (
    <div className="main--container">
      <h1>WEATHER APP</h1>
      <UserSelection />
      <h2>weather</h2>
    </div>
  );
};
export default HomePage;
