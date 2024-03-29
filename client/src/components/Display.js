import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const images = dataArray.map((item, i) => (
        <a href={item} key={i} target="_blank">
          <img src={item} alt="new" className="image-list" />
        </a>
      ));
      setData(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <div className="center">
        <div className="mirror2">
          <input
            type="text"
            placeholder="Enter Address"
            className="address"
          ></input>
          <button className="center button" onClick={getdata}>
            Get Data
          </button>
        </div>
      </div>
    </>
  );
};
export default Display;
