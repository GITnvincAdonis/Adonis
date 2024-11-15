import "./loader.css";
export default function Loader() {
  return (
    <>
      <div
        style={{ zIndex: -1 }}
        className=" fixed  w-full  flex items-center justify-center rounded-lg"
      >
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
