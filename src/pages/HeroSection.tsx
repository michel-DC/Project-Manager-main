import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[var(--background)]">
      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-sans">
                Gérez tous vos projets Front-End au même endroit
              </h1>
              <p className="mt-2 text-lg text-[var(--muted-foreground)] sm:mt-6 font-sans">
                Gérez vos projets de développement web de manière efficace avec
                notre application intuitive. Suivez l'avancement, collaborez en
                équipe et atteignez vos objectifs dans vos projets web.
              </p>

              <Link
                to="/projects"
                title=""
                className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-[var(--foreground)] transition-all duration-200 bg-[var(--muted)] border border-transparent rounded sm:mt-10 font-sans hover:bg-[var(--hover-effect)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--muted)]"
                role="button"
              >
                Ajouter votre projet
              </Link>

              <div className="mt-8 sm:mt-16">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <blockquote className="mt-6">
                  <p className="text-lg font-bold text-[var(--foreground)] font-sans">
                    Meilleur outil pour gérer vos projets
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)] font-sans">
                    Une solution complète et intuitive pour gérer vos projets
                    efficacement, avec tous les outils nécessaires pour assurer
                    leur succès.
                  </p>
                </blockquote>

                <div className="flex items-center justify-center mt-3 lg:justify-start">
                  <img
                    className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                    alt=""
                  />
                  <p className="ml-2 text-base font-bold text-[var(--foreground)] font-sans">
                    John Doe
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:col-span-1 w-svh">
              <img
                className="w-full mx-auto rounded-lg relative z-10 lg:w-3/4 xl:w-2/3"
                src="Hero/illustration.png"
                alt="Image d'illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
