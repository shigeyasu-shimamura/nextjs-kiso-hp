import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";


// フェッチを使ってサーバーサイドにアクセスする関数
export async function getAllPostsData() {

    const res = await fetch(new URL(apiUrl));
    //JSON形式に変換
    const posts = await res.json();
    return posts;


}


export async function getAllPostIds() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();


    //getStaticPathsというDynamic routing用のnext.jsで用意されたAPIにはフィールドに必ずparamsを作成する必要がある
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        }


    })
}


//idを利用して、ビルド時にデータベースからデータを取得する
export async function getPostData(id) {
    const res = await fetch(new URL(`${apiUrl}/${id}`));
    const post = await res.json();

    //postという名前でデータを返す
    return {
        post,
    };
}
