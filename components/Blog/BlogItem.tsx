"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Utility function to process text
const processText = (text: string) => {
  // Replace <st>...</st> with <strong>...</strong>
  text = text.replace(/<st>(.*?)<\/st>/g, '$1');
  
  // Replace <n/> with <br />
  text = text.replace(/<n\/>/g, '<br />');
  
  // Replace <b/> with • (bullet point)
  text = text.replace(/<b\/>/g, '• ');
  
  return text;
};

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog; // Include slug

  const metadataIntro = processText(metadata || "");

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/${slug}`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/${slug}`}>
              {`${title.slice(0, 70)}`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadataIntro}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;