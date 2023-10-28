function InputDropdown({ name, option1, option2, option3 }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-sm text-white">
        {name}
      </label>
      <select required className="rounded-xl p-4 w-[336px] lg:w-[365px] outline-none font-semibold cursor-pointer">
        <option value="20-50">{option1}</option>
        <option value="50-100" selected>{option2}</option>
        <option value="100-200">{option3}</option>
      </select>
    </div>
  );
}

export default InputDropdown;
