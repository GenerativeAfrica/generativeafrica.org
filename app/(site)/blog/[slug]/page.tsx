import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;

  const res = await fetch(`https://generativeafricablogs.onrender.com/blog/blogs/${slug}`);
  
  if (!res.ok) {
    return {
      title: "Generative Africa",
      description: "Unable to load the blog post",
    };
  }
  
  const blogData = await res.json();

  return {
    title: "Generative Africa",
    description: blogData.data.title,
  };
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const res = await fetch(`https://generativeafricablogs.onrender.com/blog/blogs/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // Prevent caching
    },
    next: { revalidate: 0 }
  });

  console.log(res)
  
  if (!res.ok) {
    return <div>Error: Unable to load the blog post</div>;
  }
  
  const blogData = await res.json();

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">{blogData.data.category}</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={blogData.data.course_image}
                      alt={blogData.data.title}
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {blogData.data.title}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>
                    {blogData.data.author}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: {new Date(blogData.data.created_at).toLocaleDateString()}
                    </span>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">Category: </span>
                    {blogData.data.category}
                  </li>
                  {blogData.data.course_link && 
                  (<li>
                    <span className="text-black dark:text-white">Link: </span>
                    <a href={blogData.data.course_link} className="duration-300 ease-in-out hover:text-primary">
                      Course Link
                    </a>
                  </li>)}
                </ul>

                <div className="blog-details">
                  <p>{blogData.data.introduction}</p>

                  {blogData.data.sections.map((section: any, index: number) => (
                    <div key={index}>
                      <h3 className="pt-8">{section.title}</h3>
                      <p>{section.content}</p>

                      {/* Render the section image if it exists */}
                      {section.section_image && (
                        <div className="my-6">
                          <Image
                            src={section.section_image}
                            alt={section.title}
                            width={800}
                            height={600}
                            className="rounded-md object-cover object-center"
                          />
                        </div>
                      )}

                      {/* Render subsections only if they exist and are an array */}
                      {section.subsections && Array.isArray(section.subsections) && (
                        section.subsections.map((subsection: any, subIndex: number) => (
                          <div key={subIndex}>
                            <h4>{subsection.title}</h4>
                            <p>{subsection.content}</p>
                            {subsection.sub_section_image && (
                              <Image
                                src={subsection.sub_section_image}
                                alt={subsection.title}
                                width={800}
                                height={600}
                                className="rounded-md object-cover object-center"
                              />
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  ))}

                  {blogData.data.blog_images?.map((image: any, imageIndex: number) => (
                    <div key={imageIndex} className="my-6">
                      <Image
                        src={image.image}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="rounded-md object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
