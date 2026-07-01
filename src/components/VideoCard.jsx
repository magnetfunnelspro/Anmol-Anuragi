import React from "react";
import { motion } from "framer-motion";

const VideoCard = ({
  title,
  thumbnail,
  youtubeId,
  videoType,
  className = "",
  setActiveVideo,
}) => {
  return (
    <motion.div
      onClick={() =>
        setActiveVideo({
          title,
          id: youtubeId,
          type: videoType,
        })
      }
      className={`group relative overflow-hidden rounded-xl border border-white/20 cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

      <div className="absolute bottom-4 left-4 right-4">
        <div className="h-[2px] w-full bg-white/20 rounded-full overflow-hidden">
          <div className="h-full w-1/4 bg-orange rounded-full" />
        </div>
      </div>
      <img
        src={thumbnail}
        alt=""
        className="w-full h-full object-cover transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="opacity-85 flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(235,110,55,0.35)]"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange">
            <i className="ri-play-fill text-2xl text-white" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
