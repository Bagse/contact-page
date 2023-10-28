function InputText({name, typeinput, place}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-sm text-white">{name}</label>
      <input type={typeinput}  name="name" placeholder={place} required className="rounded-xl p-4 w-[336px] lg:w-[365px] outline-none" />
    </div>
  );
}

export default InputText;
