import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-blue-500 flex hover:underlinec justify-between ">
      <FaStore size={60} />
      <div className="flex gap-1.5">
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Product</h5>
        <h5>Contact</h5>
       
      </div>
    </div>
  );
};

export default Header;
