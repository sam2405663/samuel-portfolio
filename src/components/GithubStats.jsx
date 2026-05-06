import useGithub from "../hooks/useGithub";

export default function GithubStats() {
  const data = useGithub();

  if (!data) return null;

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>

      <div className="flex gap-10">
        <div>Repos: {data.public_repos}</div>
        <div>Followers: {data.followers}</div>
      </div>
    </section>
  );
}