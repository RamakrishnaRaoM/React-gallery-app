import './imagee.css'
function Imagee({ id, imge, title, description }) {
  return (
    <div className="container">
      <div>
        <div>{title}</div>
        <img src={imge}/>
      </div>
    </div>
  );
}
export default Imagee;
