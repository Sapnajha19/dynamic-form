import React, { useState } from "react";

function TextInput() {
  const [selectedType, setSelectedType] = useState("text");
  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <input
          defaultValue="Add a label"
          className="bg-none text-black outline-none"
        />
        <select
          onChange={handleSelectChange}
          value={selectedType}
          placeholder="Choose file type"
          className="bg-gray border border-black rounded-md outline-none"
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="time">Time</option>
          <option value="color">Color</option>
          <option value="file">File</option>
        </select>
      </div>
      <input
        type={selectedType}
        className="w-full p-1.5 bg-grey outline-none border border-gray border-[1px] rounded-md"
      />
    </div>
  );
}

export default TextInput;
