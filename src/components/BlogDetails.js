import SectionContainer from "../layout/SectionContainer";

const BlogDetails = () => {
  return (
    <SectionContainer pageId={"blog-details"}>
      <div className="blog-page">
        <div className="blog-image">
          <img src="img/blog/blog-page-img.jpg" alt="" />
        </div>
        <div className="blog-container">
          <div className="row">
            {/*Blog Heading Start*/}
            <div className="blog-heading col-md-8 offset-md-2">
              <span className="cat">Personal</span>
              <h1>Why I become a freelancer</h1>
              <span className="blog-date">February 09, 2023</span>
            </div>
            {/*Blog Heading Start*/}
            {/*Blog Content Start*/}
            <div className="blog-content col-md-10 offset-md-1">
              <p>
                After working in the corporate world for six years, I decided to
                take a leap of faith and start my own freelance business. It was
                an intimidating decision, but it was ultimately the best choice
                for me. In this blog post, I’ll explain why I chose freelancing
                and what I have learned along the way.
              </p>
              <p>
                There are several benefits to freelancing that made it an
                attractive option for me. The first is the flexibility that
                comes with being your own boss. As a freelancer, I get to decide
                when and where I work and how much work I take on at any given
                time. This freedom allows me to structure my day in a way that
                works best for me and my lifestyle.
              </p>
              <blockquote>
                “No matter how much experience you have, how many degrees you
                have, or how well-known you have become — there is always
                something new to learn. Don’t rest on your past experiences. If
                you do nothing to improve your skills, you won’t stay where you
                are.” ― Laura Spencer
              </blockquote>
              <p>
                Another benefit is the potential to make more money than a
                traditional job might offer. With freelancing, there are no set
                salaries or pay grades; instead, you can negotiate your rates
                with clients directly. This means that if you are willing to put
                in the extra effort and deliver top-notch results, you can
                maximize your earning potential. Additionally, many clients are
                willing to pay premium rates for specialized services or
                expertise that they cannot find anywhere else.{" "}
              </p>
              <p>
                Finally, freelancing gives me an opportunity to explore
                different industries and fields of interest that may not have
                been available in a traditional job setting. Working as a
                freelancer has opened up new doors professionally as well as
                personally; it has allowed me to meet people from all over the
                world and learn about various cultures in ways that would have
                been impossible had I stayed within one company or industry.
              </p>
              <p>
                All in all, deciding to become a freelancer was one of the best
                decisions I’ve ever made—and it’s one that many other
                professionals considering taking their career into their own
                hands should consider making too. Freelancing offers numerous
                advantages both professionally and personally, including
                increased flexibility, higher potential earnings, and access to
                different industries and roles than those found in traditional
                jobs. For these reasons—and many more—I strongly believe that
                becoming a freelancer is worth every bit of effort involved in
                getting started!
              </p>
            </div>
            {/*Blog Content End*/}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;
