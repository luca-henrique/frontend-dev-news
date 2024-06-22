import SEO from '../../components/SEO';

export async function getStaticProps(context) {
  const response = await fetch('http://localhost:3333/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <SEO title="Posts" />
      <h1>Posts</h1>
      <ul>
        {posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Posts;
