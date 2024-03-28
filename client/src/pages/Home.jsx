import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Adsfooter from '../components/Adsfooter';
import Nativead from '../components/Nativead';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/Api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();

    const hasModalDisplayed = localStorage.getItem('modalDisplayed');
    if (!hasModalDisplayed) {
      const timeoutId = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem('modalDisplayed', 'true');
      }, 9000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const handleJoin = () => {
    // Direct users to WhatsApp link
    window.location.href = 'https://chat.whatsapp.com/BApt9McdfcyAo2R48pjkYh';
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div >
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-gray-600">
            <h2 className="text-2xl font-bold mb-4">Join Our WhatsApp Community</h2>
            <p className="text-lg mb-4">Join HealthRepublicMedia's WhatsApp community for exclusive updates on health and wellness tips, expert insights, and the latest trends in nutrition, fitness, mental health, and more.
</p>
            <div className="flex justify-between">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600" onClick={handleJoin}>Join Now</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600" onClick={handleClose}>Already Joined</button>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center '>
        
      <Adsfooter />
      <Adsfooter />
      <Nativead />
        
      <h1 class='text-4xl font-bold lg:text-6xl'>Welcome to Health Republic Media</h1>
<p class="mt-4 text-gray-600 text-sm sm:text-base">
Explore a healthier lifestyle, discover wellness tips, and connect with a community dedicated to well-being. Health Republic Media is your go-to source for health and wellness information, empowering you to live your best life.
</p>

        <Link
          to='/search'
          className=' text-lg sm:text-sm text-amber-500 font-bold hover:underline'
        >
          View all posts
        </Link>
        
      </div>
      <div className='p-3  dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-amber-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <Nativead />
      <Adsfooter />
    </div>
  );
}
