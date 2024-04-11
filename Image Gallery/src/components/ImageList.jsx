import { useEffect, useState } from "react";
import axios from "axios";
import Imagee from "./Imagee";
function ImageList() {
  const [imgList, setimgList] = useState([]);
  async function downloadimg() {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos"
    );
    console.log(response);
    const imgResults = response.data.photos;
    console.log(imgResults);
    const res = imgResults.map((image) => {
      return {
        id: image.id,
        image: image.url,
        title: image.title,
        description: image.description,
      };
    });
    setimgList(res);
  }
  useEffect(() => {
    downloadimg();
  }, []);
  return (
    <div>
      {imgList.map((i) => (
        <Imagee
          id={i.id}
          imge={i.image}
          title={i.title}
          description={i.description}
          key={i.id}
        />
      ))}
    </div>
  );
}
export default ImageList;
