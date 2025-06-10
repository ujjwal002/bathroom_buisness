
import React from 'react';

// Define interface for video data
interface Video {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  alt: string;
}
// Video data for Before & After tab
export const beforeAfterVideos: Video[] = [
  {
    videoId: "8UQjKR06Bkk",
    title: "Master Bathroom Renovation in Livonia",
    description:
      "Watch our stunning transformation of a dated bathroom into a luxurious retreat with custom stone designs .",
    thumbnail: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp",
    duration: "PT2M30S",
    uploadDate: "2025-05-26",
    alt: "Before and after master bathroom remodel by Stone Works Remodeling in Livonia",
  },
  {
    videoId: "WnJCf1mIm8I",
    title: "Tub-to-Shower Conversion in Farmington",
    description:
      "See how we converted a tub into a spacious walk-in shower with modern finishes in Farmington.",
    thumbnail: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/2gOE7M5Mw4F9ecfLC92pQ.webp",
    duration: "PT1M45S",
    uploadDate: "2025-05-26",
    alt: "Before and after tub-to-shower conversion by Stone Works Remodeling in Farmington",
  },
  {
    videoId: "H41U6hC63P4",
    title: "Walk-in Tub Installation in Plymouth",
    description:
      "Explore our accessible walk-in tub installation with safety features and therapeutic jets in Plymouth.",
    thumbnail: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/w6HJzxSeslcbuk0sJgPQc.webp",
    duration: "PT2M10S",
    uploadDate: "2025-05-26",
    alt: "Before and after walk-in tub installation by Stone Works Remodeling in Plymouth",
  },
];

// Define props for VideoCard component
interface VideoCardProps {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  alt: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoId,
  title,
  description,
  thumbnail,
  duration,
  uploadDate,

}) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Video Embed */}
      <div className="relative aspect-w-16 aspect-h-9 ">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-t-lg"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-sm text-gray-500 italic">Video: {title}</p>
      </div>

      {/* Video Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": title,
            "description": description,
            "thumbnailUrl": thumbnail,
            "uploadDate": uploadDate,
            "duration": duration,
            "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
            "embedUrl": `https://www.youtube.com/embed/${videoId}`,
            "publisher": {
              "@type": "Organization",
              "name": "Stone Works Remodeling",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
              },
            },
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": { "@type": "WatchAction" },
              "userInteractionCount": 500, // Update with actual view count if available
            },
          }),
        }}
      />
    </div>
  );
};

export default VideoCard;
