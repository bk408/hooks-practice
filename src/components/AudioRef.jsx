import { useRef } from "react"



const AudioRef = () => {
    const audioRef = useRef()

    const playAudio = () => {
        audioRef.current.play()
    }

    const pauseAudio = () => {
        audioRef.current.pause()
    } 
  return (
    <div>
      <audio
        src="https://soundcloud.com/dirtyworkzofficial/refuzion-out-of-my-mind?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        ref={audioRef}
        type="audio/mp3"
      ></audio>
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
}

export default AudioRef