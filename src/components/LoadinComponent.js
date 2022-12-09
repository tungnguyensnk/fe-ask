import LoadingAnimation from "./Animation/LoadingAnimation";

function LoadinComponent() {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ height: "400px", width: "400px" }}>
        <LoadingAnimation />
      </div>
    </div>
  );
}

export default LoadinComponent;
