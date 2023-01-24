/*
=================
Unused component
=================

*/



import Link from "next/link";

export default function BlogCard({allBlogsData}: {
    allBlogsData: {
        id: string,
        date: string,
        title: string
    }[]
}) {

    return (
        <>
            {allBlogsData.map(({ id, date, title }) => (
        <div className="max-w-md mx-auto md:max-w-4xl mb-5" key={id}>
            <div className="bg-white p-2 w-80 sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                <div style={{ background: 'url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")' }} className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover" />
                <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-2xl sm:text-2xl font-semibold  text-gray-600">
                        {title}
                    </h1>
                    <time dateTime="2022-10-10" className="block text-xl text-gray-500">
                        {date}
                    </time>
                    <span className="mt-2"></span>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                        {/* {desc} */}
                        This is the desctiption for your card. This is really really long. This is used to describe the content of the card. I hope you like the design...
                    </p>
                    <div className="flex gap-4 mt-auto">
                        <Link href="/blog">
                            <button className="ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-slate-300 transition-colors focus:bg-slate-500 focus:outline-none focus-visible:border-gray-500">
                                <span>Read more</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>))};
        </>
    );
}