import React, { useState } from "react";

function TextArea() {
  const [row, SetRow] = useState(2);
  const [isWarning, setIswarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleRowChange = (event) => {
    if (
      (event.target.value !== "" && event.target.value <= 0) ||
      event.target.value > 10
    ) {
      setIswarning(true);
      setWarningMessage("Invalid row size, enter between 1-10");
    } else if (event.target.value === "") {
      setIswarning(false); 
    } else {
      setIswarning(false);
      setWarningMessage("");
      SetRow(event.target.value);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <input
          defaultValue="Add a label"
          className="bg-none text-black outline-none"
        />
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-2">
            <label>Row:</label>
            <input
              onChange={handleRowChange}
              className="w-10 outline-none bg-gray border border-black rounded-md"
            />
          </div>
        </div>
      </div>
      <textarea
        type="text"
        rows={row}
        className="w-full p-1.5 bg-grey outline-none border border-gray border-[1px] rounded-md"
      />
      {isWarning && <p className="text-[red]">{warningMessage}</p>}
    </div>
  );
}

export default TextArea;
