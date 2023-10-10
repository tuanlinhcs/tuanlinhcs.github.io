import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./index.scss";

import { ImDownload3 } from "react-icons/im";
import { GoVideo } from "react-icons/go";
import { MdMusicVideo } from "react-icons/md";
import { FaVolumeMute } from "react-icons/fa";

import iconYoutube from "assets/icons/icons8-youtube-48.png";
import iconTiktok from "assets/icons/icons8-tiktok-48.png";

// const ENDPOINT = "http://localhost:5000";
const ENDPOINT = "https://letuan317.synology.me:7001";

// TODO: Loading animation when Fetch info
// TODO: Loading animation when click Download,

export default function OnlineVideoDownloader() {
  const [url, setUrl] = useState("");
  const [extractor, setExtractor] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [iconPlatform, setIconPlatform] = useState(null);

  const fetchVideoInfo = async () => {
    console.debug(`Fetching video info from ${url}`);
    setLoading(true);
    try {
      const response = await fetch(`${ENDPOINT}/download/videos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url }),
      });
      const data = await response.json();
      setVideoInfo(data.data);
      setExtractor(data.data.extractor);
      switch (data.data.extractor) {
        case "youtube":
          setIconPlatform(iconYoutube);
          break;
        case "tiktok":
          setIconPlatform(iconTiktok);
          break;
        default:
          setIconPlatform(iconYoutube);
          break;
      }
      console.debug(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video info:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const downloadVideo = async (itag, type) => {
    setLoading(true);
    setProgress(0);
    try {
      console.debug(extractor, url, itag, type);
      var fileName = videoInfo.id + ".mp4";
      var contentType = "video/mp4";
      if (type === "audio") {
        fileName = videoInfo.id + ".mp3";
        contentType = "audio/mp3";
      }
      // 1. URL Encoding
      const encodedExtractor = encodeURIComponent(extractor);
      const encodedUrl = encodeURIComponent(url);
      const encodedItag = encodeURIComponent(itag);
      const encodedType = encodeURIComponent(type);

      // 2. Fetch Request
      const response = await fetch(`${ENDPOINT}/download/videos?extractor=${encodedExtractor}&id=${videoInfo.id}&url=${encodedUrl}&itag=${encodedItag}&type=${encodedType}`, {
        method: "GET",
      });

      // 3. Check Response
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 4. Read Chunks and Update Progress
      const totalLength = +response.headers.get("Content-Length");
      let receivedLength = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        chunks.push(value);
        receivedLength += value.length;

        // Update progress in percentage
        setProgress((receivedLength / totalLength) * 100);
      }

      // 5. Create Blob from Chunks and Trigger Download
      const blob = new Blob(chunks, { type: contentType });

      // Create a temporary URL for the blob
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor (<a>) element to facilitate the download
      const tempLink = document.createElement("a");
      tempLink.href = blobUrl;

      // Suggest a name for the downloaded file
      tempLink.setAttribute("download", fileName);

      // Programmatically click the anchor link to trigger the download
      tempLink.click();

      // Clean up by revoking the temporary URL
      URL.revokeObjectURL(blobUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error downloading video:", error);
      setLoading(false);
    } finally {
      setProgress(100);
      setLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Tuan Le - Online Video Downloader</title>
        <meta name="description" content="Online video download" />
      </Helmet>
      <div className="online-video-downloader">
        {loading ? (
          <div className="container-loading">
            <div className="cover"></div>
            <div className="shapes-4"></div>
          </div>
        ) : (
          <></>
        )}
        <div className="container">
          <section>
            <h1>Online Video Downloader</h1>
            <div className="container-input">
              <input type="text" placeholder="Paste your video link here" value={url} onChange={(e) => setUrl(e.target.value)} />
              <button className="button-62" onClick={fetchVideoInfo}>
                Fetch Info
              </button>
            </div>
          </section>

          <section>
            {videoInfo ? (
              <>
                {extractor === "youtube" ? (
                  <>
                    <h4>Download video as:</h4>
                    <div className="container-icon-platform">
                      <img src={iconPlatform} alt="icon" className="icon-platform" />
                    </div>
                    {/* <progress value={progress} max="100"></progress> */}
                    <ul>
                      {videoInfo.formats.map((video, index) => (
                        <li key={index}>
                          <p>
                            {video.type === "video" ? <GoVideo className="icon-adjust-right" /> : <MdMusicVideo className="icon-adjust-right" />}
                            <span>{video.resolution}</span>
                            {video.type === "video" ? ".mp4" : ".mp3"}

                            {video.progressive ? "" : <FaVolumeMute className="icon-adjust-left" />}
                          </p>
                          {loading ? (
                            <button disabled className="button-24" onClick={() => downloadVideo(video.itag, video.type)}>
                              <ImDownload3 className="icon-adjust-right" />
                              Download
                            </button>
                          ) : (
                            <button className="button-24" onClick={() => downloadVideo(video.itag, video.type)}>
                              <ImDownload3 className="icon-adjust-right" />
                              Download
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <button onClick={() => downloadVideo("0")}>Download</button>
                  </>
                )}
                <div className="container-video-info">
                  <img src={videoInfo.thumbnail} alt="Thumbnail" />
                </div>
                <h5>{videoInfo.title}</h5>
              </>
            ) : (
              <></>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
