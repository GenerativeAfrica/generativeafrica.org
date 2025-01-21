export async function fetchBlogSlugs() {
    const response = await fetch('https://generativeafricablogs.onrender.com/blog/blogs/');
    return response;
  }
  