import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "Litloop - Buy or Rent Books",
  description: "An online bookstore to Sell and Rent Used Books",
};

export default function StoreLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg: flex-row xl:flex-row bg-gray-100">
      {/* <div className="flex p-2"> */}
        <Sidebar />
        <div>
          {children}
        </div>
      {/* </div> */}
    </div>
  );
}