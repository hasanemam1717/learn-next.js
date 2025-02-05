import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div>
      <nav>About related navbar</nav>
      <hr></hr>
      <nav className="my-6">
        <ul className="flex gap-5">
          <Link href={"/about/mission"}>Mission</Link>
          <Link href={"/about/vision"}>Vision</Link>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
