import { useEffect, useState } from "react";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      title: "Why Verified Grounds Make All the Difference",
      excerpt: "Learn how our admin approval process ensures quality and a reliable playing experience.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Quality sports ground verification process"
    },
    {
      title: "The Rise of Digital Sports Booking",
      excerpt: "Explore how apps like ZadSports are transforming the way we play and plan sports activities.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Digital sports booking transformation"
    },
    {
      title: "How Ground Owners Can Maximize Their Listings",
      excerpt: "Practical tips for ground owners to increase visibility and attract more bookings on ZadSports.",
      image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Ground owner managing multiple sports facilities"
    },
    {
      title: "Top Booking Trends",
      excerpt: "Discover the key factors that players consider when booking grounds online.",
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Sports booking trends and user preferences"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 gradient-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Sports Insights and Booking Tips</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest trends and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={post.image} alt={post.alt} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary-blue mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <button className="text-secondary-blue font-semibold hover:underline">Read More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
              <i className="fas fa-newspaper mr-2"></i>Read More on the ZadSports Blog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
