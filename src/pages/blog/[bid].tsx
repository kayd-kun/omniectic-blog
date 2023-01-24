import { GetStaticProps } from "next";
import { getAllBlogIDs, getBlogData } from "../../lib/posts";

export async function getStaticPaths() {
    const paths = getAllBlogIDs();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const blogData = await getBlogData(params?.bid as string);

    return {
        props: {
            blogData
        }

    }
}

export default function Blog({ blogData }: {
    blogData: {
        id: string,
        date: string,
        title: string,
        tag: string,
        synopsis: string,
        contentHtml: string
    }
}) {
    return (
        <>
            <h1>
                Blog Page
            </h1>
            <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
        </>
    );
}