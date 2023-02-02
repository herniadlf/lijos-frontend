/* pages/index.js */
import { ProfileFeedQuery } from "../graphql/queries/ProfileFeed";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Error from "../components/Error";

export default function Home() {
  const daoProfileId = "0xe228";

  const {
    loading,
    error,
    data: publicationsResponse,
  } = useQuery(ProfileFeedQuery, {
    variables: {
      request: {
        limit: 10,
        profileId: daoProfileId,
        publicationTypes: ["POST"],
      },
    },
  });

  if (error) {
    console.log(`Error ${error}`);
    return <Error />;
  }

  const publications = publicationsResponse?.publications?.items || [];

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        publications.map((publication) => (
          <div
            key={publication.id}
            className="w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center"
          >
            <Link href={`/post/${publication.id}`}>
              <p className="text-xl text-center mt-6">
                {publication.metadata.content}
              </p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
