const BlogSingle = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <h1>Blog single page</h1>
      <h1 className="text-red-600">This a blog id {id} </h1>
    </div>
  );
};

export default BlogSingle;
