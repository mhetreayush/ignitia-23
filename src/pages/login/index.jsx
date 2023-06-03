import LoginIll from "@/../public/Assets/loginIll.svg";
import Login from "../../components/Login";
import Image from "next/image";
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#412376] to-[#6029C0]">
      <div className="grid grid-cols-2 min-h-screen">
        <div className="flex h-full w-full justify-center items-center">
          <Login />
        </div>
        <div className="flex  h-full w-full justify-center items-center">
          <Image src={LoginIll} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Index;
