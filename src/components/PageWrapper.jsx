import Sidebar from "./SIdebar";

const PageWrapper = ({ children }) => {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 p-10">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
