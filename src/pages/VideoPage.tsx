import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoPage: React.FC = () => {
  const videoPlaceholders = [
    {
      id: '1',
      title: 'How to Build a React Dashboard',
      duration: '12:45',
      thumbnail: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '2',
      title: 'Getting Started with Node.js',
      duration: '8:32',
      thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '3',
      title: 'Flutter Development Tutorial',
      duration: '15:20',
      thumbnail: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '4',
      title: 'Modern CSS Techniques',
      duration: '10:15',
      thumbnail: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Videos & Tutorials</h1>
            <p className="text-xl text-gray-300">
              Educational content showcasing code walkthroughs, project builds, and development tips.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videoPlaceholders.map(video => (
              <div 
                key={video.id}
                className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500"
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-indigo-600 text-white p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <PlayCircle size={24} />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{video.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    A comprehensive tutorial covering key concepts and practical implementation examples.
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming soon section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">More Videos Coming Soon</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              I'm currently working on new tutorials and code walkthroughs. Subscribe to stay updated on new content.
            </p>
            
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                No spam, just notifications about new content. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoPage;