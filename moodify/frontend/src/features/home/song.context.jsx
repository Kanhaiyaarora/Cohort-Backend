import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState({
    url: "https://ik.imagekit.io/kanhaiya/cohort-2/moodify/songs/Rounds_N_Ring__RiskyjaTT.CoM__wRqM_FB1P.mp3",
    posterUrl:
      "https://ik.imagekit.io/kanhaiya/cohort-2/moodify/posters/Rounds_N_Ring__RiskyjaTT.CoM__BAxg-u5n8.jpeg",
    title: "Rounds N Ring (RiskyjaTT.CoM)",
    mood: "happy",
  });

  const [loading, setLoading] = useState(false);

  return (
    <SongContext.Provider value={{ song, setSong, loading, setLoading }}>
      {children}
    </SongContext.Provider>
  )
}
