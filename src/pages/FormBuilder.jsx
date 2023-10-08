import React, { useState } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import DropDown from "../components/DropDown";
import CheckBox from "../components/CheckBox";
import RadioButton from "../components/RadioButton";

function FormBuilder() {
  const [add, setAdd] = useState(false);
  const [selectedFieldTypes, setSelectedFieldTypes] = useState([]);
  const handleAddFormField = () => {
    setAdd(true);
  };
  const handleChange = (event) => {
    const selectedType = event.target.value;
    setSelectedFieldTypes([...selectedFieldTypes, selectedType]);

    setAdd(false);
  };

  const handleDelete = (index) => {
    // Create a copy of the selectedFieldTypes array
    const updatedFieldTypes = [...selectedFieldTypes];
    // Remove the element at the specified index
    updatedFieldTypes.splice(index, 1);
    setSelectedFieldTypes(updatedFieldTypes);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-row items-start justify-start">
        <div className="bg-white rounded-md p-10 border border-grey border-[1px] w-[500px] h-full flex flex-col gap-4 border-black border-t-[20px]">
          <input
            type="text"
            defaultValue="Untitled form"
            className="bg-none outline-none text-3xl font-light"
          />
          <input
            type="text"
            defaultValue="Untitled form"
            className="bg-none outline-none text-sm font-light"
          />
          {/* Conditionally render the selected form field component */}
          {selectedFieldTypes.map((type, index) => (
            <div key={index}>
              {type === "text input" && (
                <div>
                  <TextInput />
                  <button className="" onClick={() => handleDelete(index)}>
                    Del
                  </button>
                </div>
              )}
              {type === "text-area input" && (
                <div>
                  <TextArea />
                  <button className="" onClick={() => handleDelete(index)}>
                    Del
                  </button>
                </div>
              )}
              {type === "dropdown" && (
                <div>
                  <DropDown />
                  <button className="" onClick={() => handleDelete(index)}>
                    Del
                  </button>
                </div>
              )}
              {type === "checkbox" && (
                <div>
                  <CheckBox />
                  <button className="" onClick={() => handleDelete(index)}>
                    Del
                  </button>
                </div>
              )}
              {type === "radio buttons" && (
                <div>
                  <RadioButton />
                  <button className="" onClick={() => handleDelete(index)}>
                    Del
                  </button>
                </div>
              )}
            </div>
          ))}
          <button className="bg-black text-white p-2 rounded-md border border-gray-400 hover:bg-white hover:text-black hover:border-gray-700">
            Submit
          </button>
        </div>
        <div className="ml-4 self-start">
          <button
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
            onClick={handleAddFormField}
          >
            Add
          </button>
          {add && (
            <div className="w-[350px] h-[250px] bg-white border border-gray border-1px rounded-sm">
              <label>Enter type of form field you want to create</label>
              <select
                className="bg-gray-100 border border-black rounded-md"
                onChange={handleChange}
              >
                <option>Select an input type field</option>
                <option>text input</option>
                <option>text-area input</option>
                <option>dropdown</option>
                <option>checkbox</option>
                <option>radio buttons</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormBuilder;
