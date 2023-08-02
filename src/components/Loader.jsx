import { MoonLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return <MoonLoader color="#ffffff" size={50} loading={loading} />;
};

export default Loader;
