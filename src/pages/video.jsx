import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const API_KEY = "AIzaSyBbP59CXeAkDTu8pesdK-H0KCb5PRBfm28";
const CHANNEL_ID = "UCwrt8flME0n_287nVAjre0w";

export default function Videos() {
  const [subs, setSubs] = useState(null);
  const [videos, setVideos] = useState([]); // always an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Get subscriber count
        const res1 = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data1 = await res1.json();
        setSubs(data1?.items?.[0]?.statistics?.subscriberCount || "0");

        // Get latest videos
        const res2 = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
        );
        const data2 = await res2.json();
        setVideos(data2?.items || []);
      } catch (err) {
        console.error("Error fetching YouTube data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="min-h-screen bg-[var(--color-primary)] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          My Videos
        </motion.h2>

        {subs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-blue-400 text-lg"
          >
            {Number(subs).toLocaleString()} subscribers
          </motion.div>
        )}

        {loading ? (
          <p className="text-gray-300">Loading videos...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((v) => (
              <motion.div
                key={v.id.videoId || v.id.playlistId || v.id.channelId}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
              >
                {v.id.videoId && (
                  <LiteYouTubeEmbed
                    id={v.id.videoId}
                    title={v.snippet.title}
                    poster="hqdefault"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {v.snippet.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {v.snippet.description.slice(0, 100)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
