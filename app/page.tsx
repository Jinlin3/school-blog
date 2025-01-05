import { CampusCombobox } from "@/components/CampusCombobox";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center text-center bg-gray-900 px-5 py-10 text-white">
        <h1 className="font-bold text-5xl leading-none">
          The Official <span className="text-red-400 text-6xl block pt-2 pb-2">Rutgers University</span> Social Media
        </h1>
        <p className="py-4">Search for your campus below!</p>
        <CampusCombobox />
      </section>
      <div className="flex items-center justify-center bg-red-400">
        <SearchForm />
      </div>
      <section>
        Grid Section
      </section>
    </>
  );
}