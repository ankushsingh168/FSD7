import background from "./images/background.jpg";
const App = () => {
  return (
    <>
      <div className="bg-amber-600 text-amber-800 p-3.25 flex justify-between">
        <div className="flex">
          <div>
            <button className="bg-amber-700 px-5 py-2 mt-2 mx-2 rounded text-white hover:bg-amber-200 active:bg-amber-500">
              Login
            </button>
          </div>
          <div>
            <button className="bg-amber-700 px-5 py-2 mt-2 mx-2 rounded text-white hover:bg-amber-200 active:bg-amber-500">
              Register
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[85vh]">
          <img
            src={background}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1>Your Favorite Food,
Delivered Fast</h1>
        </div>
      </div>
    </>
  );
};
export default App;
