import React, { useState } from "react";

function DropDown() {
  const [options, setOptions] = useState(["Select an option"]);
  const [newOption, setNewOption] = useState("");
  const [isWarning, setIswarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const handleAddFormField = () => {
    if (newOption.trim() === "") {
      setIswarning(true);
      setWarningMessage("Enter an option first");
    } else if (newOption.trim() !== "") {
      setIswarning(false);
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <input
          defaultValue="Add a label"
          className="bg-none text-black outline-none"
        />
        <button
          className="bg-purple-100 text-purple-900 text-sm font-bold w-20 p-1 rounded-md"
          onClick={handleAddFormField}
        >
          Add more
        </button>
      </div>
      <div className="flex flex-col">
        <select className="border border-black rounded-[4px]">
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter a new option"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          className="bg-none outline-none mt-2"
        />
        {isWarning && <p className="text-[red]">{warningMessage}</p>}
      </div>
    </div>
  );
}

export default DropDown;
