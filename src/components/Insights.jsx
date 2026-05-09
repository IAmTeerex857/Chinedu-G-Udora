import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { blogPosts } from '../data/siteData';

export default function InsightsPreview({ count = 3 }) {
  const { callbackRef: titleRef, isVisible: titleVisible } = useFadeUp();
  const posts = blogPosts.slice(0, count);

  return (
    <section className="insights">
      <div className="container">
        <div ref={titleRef} className={`insights-header fade-up ${titleVisible ? 'visible' : ''}`}>
          <div>
            <span className="label">Articles</span>
          </div>
          <Link to="/blog" className="link-underline">View All</Link>
        </div>
        <div className="insights-grid">
          {posts.map((post) => (
            <InsightCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightCard({ post }) {
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
