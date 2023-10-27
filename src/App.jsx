import ButtonText from "./components/ButtonText";

function App() {
  return (
    <main className="px-3 md:px-40 py-5 flex flex-col gap-5">
      <header>
        <img src="./contact-form-icon.svg" alt="form icon" loading="lazy" />
      </header>

      <article className="px-60 flex flex-col text-center text-white">
        <h1 className="text-[4rem] font-bold ">
          Interested in our business pricing?
        </h1>
        <p className="text-[2rem] font-medium">
          Fill out the form to view details and we'll contact you as soon as
          possible.
        </p>
      </article>

      <div className="flex justify-center mt-7">
        <form
          action=""
          className="flex flex-col bg-[#CDD5E0]/40 p-4 rounded-2xl w-[700px]"
        >
          <div className="flex justify-between">
            <ButtonText name="Name" op={"text"} />
            <ButtonText name="Company Email" op={"email"} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
