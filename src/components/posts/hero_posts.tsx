"use client";
import React from "react";
import { cn } from "../util/cn";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../layout";
import format from "date-fns/format";
import client from "../../../tina/__generated__/client";
// import { InferGetStaticPropsType } from "next";
import Image from "next/image";

// type Props = {};

export const HeroPostsList = ({ data }: { data: any }) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };

  return (
    <>
      <section
        className={cn(
          // ` bg-teal-200`,
          `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-3`,
          true && `md:[&>*:first-child]:col-span-2`
        )}
      >
        {data.slice(0, 5).map((postData) => {
          const post = postData.node;
          const date = new Date(post.date);
          let formattedDate = "";
          if (!isNaN(date.getTime())) {
            formattedDate = format(date, "MMM dd, yyyy");
          }
          return (
            <article
              key={post._sys.filename}
              className="grid grid-rows-[300px_auto] md:grid-rows-[300px_220px] min-h-full group"
            >
              <a
                className="relative overflow-hidden"
                href={`/posts/` + post._sys.filename}
              >
                <img
                  src={post.heroImg}
                  width={600}
                  height={200}
                  className="h-full min-w-full object-cover hover:scale-[101%] transition-all duration-200 rounded-[2px]"
                  alt={`img of ${post.title}`}
                />

                <div className="z-30 absolute bottom-0 w-full h-20">
                  <div className="-z-10 absolute bottom-0 glass w-full min-h-full"></div>
                  <div className="flex items-center justify-between gap-x-1 text-white px-6 py-4">
                    <div className="flex flex-col gap-1 items-center justify-center">
                      {formattedDate !== "" && (
                        <>
                          <span className="font-bold text-gray-200 dark:text-gray-500 mx-2">
                            —
                          </span>
                          <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
                            {formattedDate}
                          </p>
                        </>
                      )}
                      <span className="text-sm text-black"> 8 mins </span>
                    </div>

                    <span className="pb-4">Category</span>
                  </div>
                </div>
              </a>

              <div className="flex justify-between flex-col gap-4 md:gap-0 py-6 pl-1">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <a
                      className="text-2xl font-semibold -tracking-wider"
                      href={`/posts/` + post._sys.filename}
                    >
                      {post.title}
                    </a>
                  </div>
                  <div className="overflow-hidden line-clamp-3 text-gray-700 dark:text-white mb-5 font-[400] md:pr-[15%]">
                    <TinaMarkdown content={post.excerpt} />
                  </div>
                </div>

                <footer className="flex justify-between items-center">
                  <a
                    href={`/posts/` + post._sys.filename}
                    className="flex justify-center items-center dark:text-white rounded-full hover:translate-x-1 transition-transform duration-150 ease-in-out font-semibold gap-1 group"
                    aria-label={`go to ${post.title}`}
                  >
                    Read Post
                    <span className="mt-[1px] group-hover:-rotate-45 transition-transform duration-250 ease-in-out">
                      <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
                    </span>
                  </a>
                </footer>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default HeroPostsList;

export const getStaticProps = async () => {
  const tinaProps = await client.queries.pageQuery();
  return {
    props: {
      ...tinaProps,
    },
  };
};

// export type PostsType = InferGetStaticPropsType<
//   typeof getStaticProps
// >["data"]["postConnection"]["edges"][number];
