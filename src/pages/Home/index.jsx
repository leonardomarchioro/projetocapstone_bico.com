import ModalLogin from "../../components/ModalLogin";
import Logo from "../../assets/Logo.png";

const Home = () => {
  return (
    <div>
      <img src={Logo} alt="Logo" />
      <ModalLogin />
    </div>
  );
};

export default Home;
