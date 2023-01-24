import { GetStaticProps } from "next";
import Link from "next/link";
import BlogGrid from "../components/blogGrid";
import HeaderSection from "../components/header";
import { getSortedBlogsData } from "../lib/posts";

export default function BookReviews({allBlogsData} : {
    allBlogsData: {
        id: string,
        date: string,
        title: string,
        tag: string
    }[]
}) {

    const sortedBRBlogs = allBlogsData.filter(blog => blog.tag === "Book Review");

    return (
        <>
            <HeaderSection />
            
            <div className="container py-10 mx-auto max-w-7xl">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Book Reviews
                </h1>

                {sortedBRBlogs.map(({ id, date, title, tag }) => (
                    <div className="grid grid-rows-1 gap-1 md:mt-6">
                        <div className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                            <div className="flex flex-col justify-start gap-2 py-6 lg:mx-6">
                                <Link href={`/blog/${encodeURIComponent(id)}`} className="text-2xl font-semibold text-gray-800 hover:underline dark:text-white ">
                                    {title}
                                </Link>
                                <span className="text-sm text-gray-400 dark:text-gray-300">
                                    {date}
                                </span>
                                <p className="text-gray-600 text-xl sm:text-base line-clamp-3">
                                    This is the desctiption for your card. This is really really long. This is used to describe the content of the card. I hope you like the design...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allBlogsData = await getSortedBlogsData();
    return {
        props: {
            allBlogsData
        }
    }
}