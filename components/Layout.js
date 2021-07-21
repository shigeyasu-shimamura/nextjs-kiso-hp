import Head from "next/head";
import Link from "next/link";

import Image from 'next/image';

export default function Layout({ children, title = "HP by Nextjs" }) {
    return (

        // min-h-screen:スクリーンの高さ
        // text-sm : フォントの大きさ
        // text-mno フォントの種類

        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>

            <header>

                {/* bg-gray-800：バックグラウンドカラー
            w-screen 横幅 */}
                <nav className="bg-gray-800 w-screen">

                    {/* pl-8 padding-left:2rem 32px      h-14 height 3.5rem 56px    〇-x  xは4px */}
                    <div className="flex justify-center  items-center pl-8 h-14">


                        {/* space-x-4       --tw-space-x-reverse: 0;
margin-right: calc(1rem * var(--tw-space-x-reverse));
margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); */}


                        <div className="flex space-x-4">

                            {/* NextjsではあらかじめLinkコンポーネントが用意されている。違うページに飛べる */}

                            {/* 。パスはファイル名に対応する */}

                            <Link href="/">
                                {/* px-3 左右のパディング12px   py-2 上下のパディング 8px */}
                                {/* rounded border-radius 4px */}

                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Home
                                </a>

                            </Link>

                            {/* 。パスはファイル名に対応する。 */}
                            {/* 高速レンダリング */}
                            <Link href="/blog-Page">

                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Blog
                                </a>

                            </Link>

                            <Link href="/contact-Page">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Contact
                                </a>
                            </Link>



                        </div>

                    </div>
                </nav>
            </header>

            {/* w-screen 横幅が100vw     vw:ビューポートの幅に対する割合 */}
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>



            {/* w-full   width 100%  h-12 height:48px   border-t border-top-width:1px */}
            <footer className="w-full h-12 flex justify-center items-center border-t">
                <a
                    className="flex items-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">

                    Powered by{" "}

                    {/* h-4 height:16px ml-2 margin-left 8px */}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />



                </a>





            </footer>


        </div>
    )
}