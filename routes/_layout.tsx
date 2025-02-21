import { PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default function Layout({ Component, url }: PageProps) {
  return (
    <div class="min-h-screen bg-gray-50">
      <Navbar path={url.pathname}/>
      <Component />
    </div>
  );
}