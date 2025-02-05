import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog -1",
      description: "Blog description 1",
    },
    { id: 2, title: "Blog -2", description: "Blog description 2" },
    { id: 3, title: "Blog -3", description: "Blog description 3" },
  ];
  return (
    <div>
      <h1>BlogPage</h1>
      <div>
        {blogs.map((blog) => (
          <h1 key={blog.title}>
            <Link href={`/blogs/${blog.id}`}> {blog.description} </Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
