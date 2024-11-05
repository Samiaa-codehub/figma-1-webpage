import Header from "@/components/header/header";
import Image from "next/image";
import image from "../../public/image.png";

const Main = () => {
  return (
    <div className="h-screen">
      <div>
        <Header></Header>
      </div>
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="text-[44px] font-bold">Welcome To Our Website</h1>
          <p className="text-[32px] w-[571px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <button className="button mt-[50px] h-[66px] w-[237px] text-[28px]">
            Contact Us
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image src={image} alt="image" width={502} height={465} />
        </div>
      </div>
    </div>
  );
};
export default Main;
