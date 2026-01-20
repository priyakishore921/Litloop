import Sidebar from "../ui/sidebar/Sidebar";
import Header from "../ui/header/Header";
import StoreProvider from "../provider/index";

export const metadata = {
  title: "Litloop - Buy or Rent Books",
  description: "An online bookstore to Sell and Rent Used Books",
};

export default function StoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row bg-gray-100 p-4">
        {/* <div className="flex p-2"> */}
        <Sidebar />
        <div className="grow ml-2">
          <Header />
          {children}
        </div>
        {/* </div> */}
      </div>
    </StoreProvider>
  );
}