import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative Africa",
  description: "Pioneering the Future of AI Innovation Across the Continent",
};

const BlogPage = async () => {
  // Fetch the blog data from the API 1
  const response = await fetch("https://generativeafricablogs.onrender.com/blog/blogs/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Cache-Control": "no-store"
    },
    // next: { revalidate: 0 }
  });
  
  const result = await response.json();

  // Extract the blogs data
  const blogs = result.data || []; // Fallback to an empty array if data is undefined

  console.log(blogs)

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogs.map((post) => (
              <BlogItem
                key={post.id}
                blog={{
                  _id: post.id, // Include the required _id property
                  mainImage: post.course_image, // Ensure the image URL is absolute
                  title: post.title,
                  metadata: post.introduction,
                  slug: post.slug,
                }}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
