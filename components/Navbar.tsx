interface NavbarProps {
  path: string;
}

export default function Navbar({ path }: NavbarProps) {
  const isActive = (href: string) => {
    if (href === "/") {
      return path === "/";
    }

    return path.startsWith(href);
  };

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-md transition-colors ${
      isActive(href)
        ? "text-blue-600 bg-white/20 backdrop-blur-sm"
        : "hover:text-gray-600 hover:bg-white/10"
    }`;

  return (
    <nav class="sticky top-0 w-full bg-white/70 backdrop-blur-md border-b border-white/20 z-50">
      <div class="max-w-3xl mx-auto items-center py-3 px-1">
        <div class="flex space-x-4">
          <a href="/" class={linkClass("/")}>Home</a>
          <a href="/projects" class={linkClass("/projects")}>Projects</a>
        </div>
      </div>
    </nav>
  );
}
