import { useState } from "react";
import AnimationCard from "./AnimationCard";
import AnimationDrawer from "./AnimationDrawer";
import { animations } from "../data/animations";
import LazyCard from "./LazyCard";


const categories = ["All", "Loader", "Button", "Text", "Transition"];

const LibrarySection = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase();
// category + search 
  const filtered = animations
  // first filter => for category 
    .filter(a => activeCategory === "All" || a.category === activeCategory)
    // second filter => for using search 
    .filter(a => a.title.toLowerCase().includes(query));

  const openDrawer = (animation) => {
    setSelectedAnimation(animation);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setTimeout(() => setSelectedAnimation(null), 300);
  };

  return (
    <section id="librarysection" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Motion Library</h2>
        <p className="text-gray-500 mt-2">Production-ready animations and loaders.</p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search animations..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 rounded-full border border-gray-200 bg-white text-gray-800 placeholder-gray-400 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all text-center"
        />
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
  
      {/* Grid */}
     {/* grid + lazyloading  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filtered.length > 0 ? (
    filtered.map(anim => (
      <LazyCard key={anim.id}>
        <AnimationCard
          title={anim.title}
          onCopy={() => navigator.clipboard.writeText(anim.cssCode)}
          onClick={() => openDrawer(anim)}
        >
          {anim.preview}
        </AnimationCard>
      </LazyCard>
    ))
  ) : (
    <div className="col-span-3 text-center py-20 text-gray-400">
      No animations found for "<span className="text-gray-600">{searchQuery}</span>"
    </div>
  )}
</div>

      <AnimationDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        animation={selectedAnimation}
      />
    </section>
  );
};

export default LibrarySection;
