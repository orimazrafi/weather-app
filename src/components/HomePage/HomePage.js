import { useFetch } from "../../hooks";
const HomePage = () => {
  useFetch();
  return (
    <div className="main--container">
      <h1>WEATHER APP</h1>
      <h2>input fields</h2>
      <h2>weather</h2>
    </div>
  );
};
export default HomePage;
