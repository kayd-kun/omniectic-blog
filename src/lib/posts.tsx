import path from "path";
import fs from 'fs';
import matter from 'gray-matter';
// import reactMarkdown from "react-markdown";

// import ReactDom from "react-dom";
// import remarkGfm from 'remark-gfm'
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), 'src/Blogs');

export function getSortedBlogsData() {
    const filenames = fs.readdirSync(blogsDirectory);

    // console.log(`FileNames: ${filenames}`);

    const allBlogsData = filenames.map((filename) => {
        // Remove .md filename to get id
        const id = filename.replace(/\.md$/, '');
        // console.log(`Id: ${id}`);

        // Read markdown file as string
        const fullpath = path.join(blogsDirectory, filename);
        // console.log(`Fullpath: ${fullpath}`);
        const fileContents = fs.readFileSync(fullpath, 'utf8');
        // console.log(`FileContents: ${fileContents}`);

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data as { date: string, title: string, tag: string, synopsis: string }
        };
    });

    // Sort posts by date
    return allBlogsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllBlogIDs() {
    const filenames = fs.readdirSync(blogsDirectory);

    // Returns an array that looks like:
    /*
    [
        {   params: {
                id: 'first-post-title'
            }
        },
        {
            params: {
                id: 'second-post-title'
            }    
        }
    ]
    */

    // The returned list MUST be an array of objects and not an array of string
    // Each object must have the "params" key and contain an object with the 'id' key as we have [id] in the file name
    // Else, the getStaticPaths will fail
    return filenames.map((filename) => {
        return {
            params: {
                bid: filename.replace(/\.md$/, '')
            }
        }
    })
}

export async function getBlogData(id: string) {

    const fullpath = path.join(blogsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullpath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use react-markdown to convert markdown to html string
    // ReactDom.render(
    //     <ReactMarkdown children={matterResult.content} remarkPlugins={[remarkGfm]} />,
    //     document.body
    //   )

    const processedContent = await remark()
                .use(html)
                .process(matterResult.content)
     
    return {
        id,
        contentHtml: processedContent.toString(),
        ...matterResult.data as { date: string, title: string, tag: string, synopsis: string }
    }
}