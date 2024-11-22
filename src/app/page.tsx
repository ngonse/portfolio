import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen max-w-6xl mx-auto  font-mono">
      <Header />

      <main className="p-4">
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
