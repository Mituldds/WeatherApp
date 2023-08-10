import React, { useEffect, useState } from "react";
import axios from "axios";

import memesData from "./memesData";

const Meme = () => {
  const [memeImg, setMemeImg] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    getApiData();
  },[]);

  const getApiData = async () => {
    try {
      const responce = await axios.get("https://api.imgflip.com/get_memes");
      setAllMemeImages(responce.data.data.memes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(allMemeImages);

  let getMemeImage = (event) => {
    event.preventDefault();
    // const memesArray =
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMemeImg((preMeme) => ({ ...preMeme, randomImage: url }));
  };

  let handleChange = (event) => {
    const { name, value } = event.target;
    setMemeImg((previousMeme) => ({
      ...previousMeme,
      [name]: value,
    }));
  };

  return (
    <>
      <main>
        <form className="form">
          <input
            type="text"
            className="form--input"
            placeholder="Top text"
            name="topText"
            value={memeImg.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form--input"
            placeholder="Bottom text"
            name="bottomText"
            value={memeImg.bottomText}
            onChange={handleChange}
          />
          <button onClick={getMemeImage}>Get a New meme image 🖼</button>
        </form>
      </main>
      <div className="meme">
        <img className="meme-Image" src={memeImg.randomImage} />
        <h2 className="meme--text top">{memeImg.topText}</h2>
        <h2 className="meme--text bottom">{memeImg.bottomText}</h2>
      </div>
    </>
  );
};

export default Meme;
