import GET from "./api/route";

export default async function Home() {
  const links = await GET();
  console.log(links);
  return (
    <main>
      <h1>links</h1>
      <ul>
        {links.map((link) => {
          const element = (
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          );
          return element;
        })}
      </ul>
    </main>
  );
}
