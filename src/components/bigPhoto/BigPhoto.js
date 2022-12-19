import "./BigPhoto.css";

function BigPhoto() {
  return (
    <>
      <div>
        <img key={index} src={photo} alt="" width="200px" height="150px" />
      </div>
    </>
  );
}

export default BigPhoto;
