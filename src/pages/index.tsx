import { GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import HeaderSection from "../components/header";
import BlogCard from "../components/homeBlogCard";
import BlogList from "../components/homeBlogList";
import ProfileCard from "../components/profile";
import { getSortedBlogsData } from "../lib/posts";

export default function Home({ allBlogsData }: {
  allBlogsData: {
      id: string,
      date: string,
      title: string,
      tag: string,
      synopsis: string
  }[]
}) {

  // console.log(`Blog Data: ${allBlogsData}`)

  return (
    <>
      <Head>
        <title>Eclectico</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-3">
          <HeaderSection />
          <ProfileCard />
          <BlogList allBlogsData={allBlogsData}/>
          <Footer />
      </main>
    </>
  );
};

// Create a getStaticProps function to fetch data from the lib folder using typescript
export const getStaticProps: GetStaticProps = async () => {
  const allBlogsData = await getSortedBlogsData();
  
  // console.log(`Blogs: ${blogs}`);
  // for (const k in blogs) {
  //     console.log(`Key: ${k}`);
  //     for (const val in blogs[k]) {
  //         console.log(`Value: ${val}`);
  //         const typeVal = typeof(val)
  //         console.log(typeVal);
  //     }
  // }

  return {
      props: {
        allBlogsData
      }
  }
}