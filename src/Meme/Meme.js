import React,{useState} from 'react'
import memesData from "./memesData"
const Meme = () => {

    const [memeImg , setMemeImg] = useState("")

    let getMemeImage = (event)=>{
        event.preventDefault();
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImg(memesArray[randomNumber].url)
        // let url = memesArray[randomNumber].url
        // console.log(url);
        }

  return (
    <>
    <main>
        <form className='form'>
            <input type='text' className='form--input' placeholder='Top text'/>
            <input type='text' className='form--input' placeholder='Bottom text'/>
            <button
            onClick={getMemeImage}
            >Get a New meme image 🖼</button>
        </form>
    </main>
    <img className='meme-Image' src={memeImg} />
    </>
  )
}

export default Meme