import { useParams, Navigate, Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { blogPosts } from '../data/siteData';
import CTASection from '../components/CTA';

import ReactMarkdown from 'react-markdown';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return <BlogPost key={slug} post={post} />;
}

function BlogPost({ post }) {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();
  const { callbackRef: contentRef, isVisible: contentVisible } = useFadeUp();

  return (
    <>
      <section className="post-hero">
        <div className="container container--narrow">
          <div ref={heroRef} className={`post-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <Link to="/blog" className="breadcrumb">← Back to Insights</Link>
            <div className="post-meta">{post.date}</div>
            <h1>{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="post-featured-image">
        <div className="container container--narrow">
          {post.image ? (
            <img src={post.image} alt={post.title} className="post-image" style={{ width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }} />
          ) : (
            <div className="post-image image-placeholder" data-placeholder="Featured Image" />
          )}
        </div>
      </section>

      <article className="post-body">
        <div className="container container--narrow">
          <div ref={contentRef} className={`post-content fade-up ${contentVisible ? 'visible' : ''}`}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
