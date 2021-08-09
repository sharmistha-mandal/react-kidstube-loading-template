import Post from "../post/Post";
import "./feed.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/videos/1");
        setVideos(res.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    getVideos();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="custom" />
      ) : (
        videos.map((video) => <Post key={video.id} video={video} />)
      )}
    </div>
  );
};

export default Feed;
