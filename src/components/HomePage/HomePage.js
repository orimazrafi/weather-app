import { useFetch } from "../../hooks";
import UserSelection from "../UserSelection/UserSelection";
import { AppHeadline } from "../../elements";
const HomePage = () => {
  useFetch();
  return (
    <div className="main--container">
      <AppHeadline>WEATHER APP</AppHeadline>
      <UserSelection />
      <h2>weather</h2>
    </div>
  );
};
export default HomePage;
