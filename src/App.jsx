import InputDropdown from "./components/InputDropdown";
import InputText from "./components/InputText";

function App() {
  return (
    <main className="px-3 lg:px-40 py-8 flex flex-col gap-5">
      <header>
        <img src="./contact-form-icon.svg" alt="form icon" loading="lazy" />
      </header>

      <article className="px-10 lg:px-60 flex flex-col text-center text-white">
        <h1 className="text-[2rem] md:text-[4rem] font-bold ">
          Interested in our business pricing?
        </h1>
        <p className="text-lg md:text-[2rem] font-medium">
          Fill out the form to view details and we'll contact you as soon as
          possible.
        </p>
      </article>

      <div className="flex justify-center mt-7">
        <form
          action="form"
          className="flex flex-col bg-[#CDD5E0]/40 p-6 rounded-2xl w-[380px] lg:w-[800px] gap-5 justify-center"
        >
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3 lg:gap-0">
            <InputText name="Name" typeinput="text" place="Ethan Johnson" />
            <InputText
              name="Company Email"
              typeinput="email"
              place="ethan@johnson.com"
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-3 lg:gap-0">
            <InputDropdown
              name="Company Size"
              option1="20-50 employees"
              option2="50-100 employees"
              option3="100-200 employees"
            />
            <InputDropdown
              name="Subject"
              option1="Marketing Digital"
              option2="Building Landing pages"
              option3="Videogame Development"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white">Message</label>
            <textarea
              name="message"
              required
              className="rounded-xl p-4 outline-none font-semibold w-[336px] lg:w-full"
              id="message"
              cols="20"
              rows="7"
              placeholder="50-100 employees"
            ></textarea>
          </div>
          <button type="submit" className="text-xl text-[#4036A9] rounded-xl p-4 bg-white font-bold hover:scale-105 transition duration-300 w-[336px] lg:w-full">Contact Sales</button>
        </form>
      </div>
    </main>
  );
}

export default App;
