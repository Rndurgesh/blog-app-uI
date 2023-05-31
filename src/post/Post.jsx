import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          minima.
        </span>
        <hr />

        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        excepturi animi! Fugiat voluptatibus officia consequuntur sunt aliquam
        eius quis! Odit aliquid tempore cupiditate iure eligendi quia enim
        dolores magni accusamus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tenetur, excepturi animi! Fugiat voluptatibus officia
        consequuntur sunt aliquam eius quis! Odit aliquid tempore cupiditate
        iure eligendi quia enim dolores magni accusamus. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Tenetur, excepturi animi! Fugiat
        voluptatibus officia consequuntur sunt aliquam eius quis! Odit aliquid
        tempore cupiditate iure eligendi quia enim dolores magni accusamus.
      </p>
    </div>
  );
};

export default Post;
