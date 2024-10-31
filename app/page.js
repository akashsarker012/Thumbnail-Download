"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const getThumbnail = () => {
    let youtubeId;
    const standardUrlMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|(?:youtu\.be\/))([a-zA-Z0-9_-]{11})/);
    
    if (standardUrlMatch) {
      youtubeId = standardUrlMatch[1];
    }

    if (youtubeId) {
      setThumbnailUrl(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);
    } else {
      alert("Invalid YouTube URL. Please try again.");
    }
  };

  const handleDownload = () => {
    console.log(thumbnailUrl);
  };
  

  return (
    <div className="font-[sans-serif] px-6 py-16 bg-gradient-to-t">
      <Head>
        <title>Download YouTube Thumbnail</title>
        <meta name="description" content="Easily download YouTube and Vimeo thumbnail images in various qualities for free. Just paste the video URL and get the thumbnail!" />
        <meta name="keywords" content="YouTube, thumbnail downloader, download thumbnail, Vimeo thumbnail, free download" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>

      <div className="text-center max-w-3xl max-md:max-w-md mx-auto">
        <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold md:!leading-[55px]">
          Download YouTube Thumbnail
        </h2>
        <div className="mt-8">
          <p className="text-base text-gray-500 leading-relaxed">
            Download YouTube and Vimeo thumbnail images of all quality for free. This application lets you download thumbnails of all quality. Just paste the URL of the thumbnail video in the below input and click Get Thumbnail Image.
          </p>
        </div>

        <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 mx-auto overflow-hidden">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube or Facebook URL"
            className="w-full outline-none bg-white pl-4 text-gray-800 text-sm"
          />
          <button
            onClick={getThumbnail}
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-4 py-2.5"
          >
            Get Thumbnail
          </button>
        </div>

        {thumbnailUrl && (
          <div className="mt-8 text-center">
            <h2 className="text-xl mb-2">Thumbnail Preview:</h2>
            <img src={thumbnailUrl} alt="Thumbnail" className="rounded-lg shadow-lg mb-4" />
            <button onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 transition-all text-white text-sm rounded-full px-4 py-2.5"
            >
              Download Thumbnail
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
