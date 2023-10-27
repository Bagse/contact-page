function ButtonText({name, op}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-sm text-white">{name}</label>
      <input type={op} name="name" placeholder="Ethan Johnson" className="rounded-xl p-4 w-[326px] text-[#CDD5E0] outline-none" />
    </div>
  );
}

export default ButtonText;
