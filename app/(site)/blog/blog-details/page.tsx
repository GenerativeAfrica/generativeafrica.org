import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Generative Africa",
  description: "Pioneering the Future of AI Innovation Across the Continent",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
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
                        fill="none"
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
                    <a href="#">Reinforcement Learning</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Practical Deep reinforcement learninig course 🧠
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Magala Reuben
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: January 2nd, 2025
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category: 
                    </span>
                     Reinforcement Learning
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Link: 
                    </span>
                    <a href="https://github.com/magalaReuben/practicaldeepreinforcementlearning" className="duration-300 ease-in-out hover:text-primary">
                      Course Link
                    </a>
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Looking for a practical approach to learning deep reinforcement learning (DRL)? 
                    This comprehensive course takes you from the fundamentals to advanced concepts through hands-on implementation using Python and PyTorch.
                  </p>

                  
                  <span className="text-black dark:text-white">
                  Course Structure
                  </span>
                  

                  <p>
                  The course is thoughtfully structured across multiple lectures, each building upon previous concepts:
                  </p>

                  <li>
                    <span className="text-black dark:text-white">
                      Lecture 1: Foundations
                    </span>
                  </li>
                  The journey begins with an introduction to deep reinforcement learning fundamentals, including a practical implementation with the Lunar Lander environment - a classic starting point for understanding RL concepts.
                  <li>
                    <span className="text-black dark:text-white">
                      Lecture 2: Q-Learning Deep Dive
                    </span>
                  </li>
                  This section explores Q-learning in detail, with implementations across different environments including Frozen Lake and Taxi. The lecture covers both on-policy and off-policy approaches, providing a solid theoretical and practical foundation.
                  <li>
                    <span className="text-black dark:text-white">
                      Lecture 3: Deep Q-Learning
                    </span>
                  </li>
                  Moving into deep Q-learning, students get hands-on experience implementing DQN with both PyTorch and Atari environments, bridging the gap between traditional Q-learning and modern deep learning approaches.
                  <li>
                    <span className="text-black dark:text-white">
                      Lectures 4-6: Advanced Topics
                    </span>
                  </li>
                  The course progresses into more sophisticated methods including:

                  <li>
                    <span className="text-black dark:text-white">
                      Policy-based methods
                    </span>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Actor-Critic approaches
                    </span>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Advanced implementations using PyTorch
                    </span>
                  </li>
                  

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-03.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    What Makes This Course Special
                  </h3>

                  <p>
                  What sets this course apart is its focus on practical implementation. Each concept is accompanied by Jupyter notebooks (.ipynb files) that allow students to experiment with the code directly. The course leverages popular environments like Atari games and OpenAI Gym to provide engaging, real-world applications of the concepts learned.
                  Whether you're interested in training agents to land lunar modules or mastering policy gradient methods, this course provides the hands-on experience needed to understand and implement deep reinforcement learning algorithms.
                  The course materials are continuously updated, with recent additions focusing on PyTorch implementations and expanded coverage of actor-critic methods, ensuring students learn current and relevant approaches in the field.
                  </p>
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
