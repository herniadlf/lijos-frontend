/* pages/post/[postId].js */
import { useRouter } from "next/router";
import { CommentFeedQuery } from "../../graphql/queries/CommentFeed";
import { useQuery } from "@apollo/client";
import Error from "../../components/Error";

export default function Post() {
  const router = useRouter();
  const { postId } = router.query;

  const {
    loading,
    error,
    data: commentsResponse,
  } = useQuery(CommentFeedQuery, {
    variables: {
      request: {
        limit: 10,
        commentsOf: postId,
      },
    },
  });

  if (error) {
    console.log(`Error ${error}`);
    return <Error />;
  }

  const comments = commentsResponse?.publications?.items || [];

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center"
          >
            <p className="text-xl text-center mt-6">
              By {comment.profile.handle}
            </p>
            <p className="text-xl text-center mt-6">
              By {comment.metadata.content}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
