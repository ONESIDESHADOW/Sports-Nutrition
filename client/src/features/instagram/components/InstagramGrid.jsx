import InstagramCard from "./InstagramCard";

const InstagramGrid = ({ posts }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <InstagramCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default InstagramGrid;