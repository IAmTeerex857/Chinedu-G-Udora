import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { blogPosts } from '../data/siteData';
import CTASection from '../components/CTA';

export default function BlogPage() {
  const { callbackRef: heroRef, isVisible: heroVisible } = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--blog">
        <div className="container">
          <div ref={heroRef} className={`page-hero-content fade-up ${heroVisible ? 'visible' : ''}`}>
            <span className="label">Articles</span>
            <h1>Updates & Insights</h1>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

function BlogCard({ post }) {
  const { callbackRef, isVisible } = useFadeUp();

  return (
    <Link
      to={`/blog/${post.slug}`}
      ref={callbackRef}
      className={`insight-card fade-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="insight-thumb">
        {post.image ? (
          <img src={post.image} alt={post.title} />
        ) : (
          <div className="image-placeholder" data-placeholder="Blog Thumbnail" />
        )}
      </div>
      <div className="insight-meta">{post.date}</div>
      <h3 className="insight-title">{post.title}</h3>
    </Link>
  );
}
