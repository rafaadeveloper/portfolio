export function Header() {
  const links = [
    {
      label: "Github",
      link: "https://github.com/rafaadeveloper",
    },
  ];

  return (
    <header className="ml-auto flex items-center gap-8 text-secondary">
      {links.map((link) => (
        <a
          className="text-primary underline-offset-4 hover:underline hover:transition-all hover:duration-300"
          href={link.link}
        >
          {link.label}
        </a>
      ))}
    </header>
  );
}
