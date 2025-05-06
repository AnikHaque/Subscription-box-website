import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Maximizing Productivity with CodeMaster Pro",
    category: "Development Tools",
    image:
      "https://w7.pngwing.com/pngs/388/444/png-transparent-web-development-responsive-web-design-php-development-tools-software-development-web-design-web-design-development-responsive-web-design-thumbnail.png",
    excerpt:
      "Learn how CodeMaster Pro enhances developer workflows with powerful features.",
  },
  {
    id: 2,
    title: "StreamHub: The Future of Streaming Services",
    category: "Media Streaming",
    image:
      "https://w7.pngwing.com/pngs/902/264/png-transparent-streaming-media-online-video-platform-business-service-live-youtube-blue-text-service-thumbnail.png",
    excerpt:
      "Explore StreamHub’s advanced media capabilities and what sets it apart.",
  },
  // Add more as needed
];

const Blogs = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.category}</p>
              <p className="text-sm text-gray-700">{post.excerpt}</p>
              <button className="mt-4 btn btn-sm btn-primary">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
