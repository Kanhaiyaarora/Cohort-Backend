import { useContext } from "react";
import { getSong } from "../service/song.api";
import { SongContext } from "../song.context";

export const useSong = () => {
  const context = useContext(SongContext);
  const { song, setSong, loading, setLoading } = context;

  async function handleGetSong({ mood }) {
    setLoading(true);
    try {
      const data = await getSong({ mood });
      setSong(data.song);
    } catch (error) {
      console.error("Error fetching song:", error);
    } finally {
      setLoading(false);
    }
  }

  return { song, loading, handleGetSong };
};
