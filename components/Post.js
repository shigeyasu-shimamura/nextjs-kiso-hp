
import Link from "next/dist/client/link";

const Post = ({ post }) => {

    return (<div>

        <span>{post.id}</span>
        {" : "}

        <Link href={`/posts/${post.id}`}>

            {/* border-b border-bottom-width:1px */}
            <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
                {post.title}
            </span>

        </Link>
    </div>
    );
};

export default Post;