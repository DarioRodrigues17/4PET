import React from 'react';
import * as Icons from 'lucide-react';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    caption: 'Nossos amigos peludos se divertindo no parque! 🐕',
    likes: 124,
    comments: 23
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80',
    caption: 'Momento de relaxamento na creche 🐱',
    likes: 98,
    comments: 15
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
    caption: 'Passeio da tarde com nossos amigos! 🦮',
    likes: 156,
    comments: 28
  }
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Siga-nos no Instagram
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Acompanhe o dia a dia dos nossos amigos peludos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTAGRAM_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-square">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm line-clamp-2">{post.caption}</p>
                <div className="mt-3 flex items-center justify-between text-gray-500 text-sm">
                  <span className="flex items-center">
                    <Icons.Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <Icons.MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/4pet?igsh=MWNoYTRhZnZ6cHZjZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#CEBDB6] hover:bg-[#BBA89E]"
          >
            <Icons.Instagram className="h-5 w-5 mr-2" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}