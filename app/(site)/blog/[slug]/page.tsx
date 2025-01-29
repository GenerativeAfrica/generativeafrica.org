import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

// Utility function to process text
const processText = (text: string) => {
  // Replace <st>...</st> with <strong>...</strong>
  text = text.replace(/<st>(.*?)<\/st>/g, '<span class="text-black dark:text-white"><b>$1</b></span>');
  
  // Replace <n/> with <br />
  text = text.replace(/<n\/>/g, '<br />');
  
  // Replace <b/> with • (bullet point)
  text = text.replace(/<b\/>/g, '• ');
  
  return text;
};

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
      // "Cache-Control": "no-store", // Prevent caching
    },
    next: { revalidate: 0 }
  });

  console.log(res)
  
  if (!res.ok) {
    return <div>Error: Unable to load the blog post</div>;
  }
  
  const blogData = await res.json();

  // Process the introduction text
  blogData.data.introduction = processText(blogData.data.introduction);

  // Process section content and subsection content
  blogData.data.sections = blogData.data.sections?.map((section: any) => {
    section.content = processText(section.content);
    section.subsections = section.subsections?.map((subsection: any) => {
      subsection.content = processText(subsection.content);
      return subsection;
    });
    return section;
  });

  // Ensure blog_images and sections are arrays before merging
  const blogImages = Array.isArray(blogData.data.blog_images) ? blogData.data.blog_images : [];
  const sections = Array.isArray(blogData.data.sections) ? blogData.data.sections : [];

  // Merge blog_images and sections into a single array
  const mergedContent = [
    ...blogImages.map((image: any) => ({
      type: 'image',
      data: image,
      created_at: image.created_at || blogData.data.created_at, // Fallback to blog creation time if image doesn't have its own timestamp
    })),
    ...sections.map((section: any) => ({
      type: 'section',
      data: section,
      created_at: section.created_at || blogData.data.created_at, // Fallback to blog creation time if section doesn't have its own timestamp
    })),
  ];

  // Sort the merged content by created_at
  mergedContent.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-full">
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
                  <p dangerouslySetInnerHTML={{ __html: blogData.data.introduction }} />

                  {mergedContent.map((item: any, index: number) => {
                    if (item.type === 'image') {
                      return (
                        <div key={index} className="my-6">
                          <Image
                            src={item.data.image}
                            alt={item.data.alt}
                            width={800}
                            height={600}
                            className="rounded-md object-cover object-center"
                          />
                        </div>
                      );
                    } else if (item.type === 'section') {
                      const section = item.data;
                      return (
                        <div key={index}>
                          <h3 className="pt-8">{section.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: section.content }} />

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
                                <p dangerouslySetInnerHTML={{ __html: subsection.content }} />
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
                      );
                    }
                    return null;
                  })}
                </div>

                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;