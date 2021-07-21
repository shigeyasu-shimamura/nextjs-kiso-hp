//詳細ページの内容を記述する


import Link from "next/link";
import Layout from "../../components/Layout";

import { getAllPostsData, getAllPostIds, getPostData } from "../../lib/posts";


//➀idの一覧を取得
export async function getStaticPaths() {
    const paths = await getAllPostIds();


    // fallbackはユーザーが存在しないファイルにアクセス使用したときの挙動に利用する。例ー＞404　Not Found を返す
    return {
        paths,
        fallback: false,
    };
}


//➁各idを利用して、個別データを取得
export async function getStaticProps({ params }) {
    const { post: post } = await getPostData(params.id);

    return {
        props: {
            post,
        },
    };
}

//➂取得したデータをpropsでReactComponentに渡して、pre-rendering
//Postコンポーネント
export default function Post({ post }) {
    if (!post) {
        return <div>Loading...</div>
    }

    return (
        <Layout title={post.title}>

            <p className="m-4">
                {"ID : "}
                {post.id}
            </p>


            {/* px-10 padding-left padding-right 40px */}
            <p className="mb-8 text-xl font-bold">{post.title}</p>
            <p className="px-10">{post.body}</p>

            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                    {/* Heroiconsを利用 */}
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    <span>Back to blog-page</span>

                </div>
            </Link>

        </Layout>


    );




}