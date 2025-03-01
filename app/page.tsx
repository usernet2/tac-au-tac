import dynamic from "next/dynamic";

const Home = dynamic(() => import('../components/Home/Home'))

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Home />
    </main>
  );
}
