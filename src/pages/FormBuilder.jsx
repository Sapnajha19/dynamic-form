import React, { useState } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import DropDown from "../components/DropDown";
import CheckBox from "../components/CheckBox";
import RadioButton from "../components/RadioButton";

function FormBuilder() {
  const [add, setAdd] = useState(false);
  const [selectedFieldTypes, setSelectedFieldTypes] = useState([]);
  const [formConfig, setFormConfig] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleAddFormField = () => {
    setAdd(true);
  };
  const handleChange = (event) => {
    const selectedType = event.target.value;
    setSelectedFieldTypes([...selectedFieldTypes, selectedType]);
    // Update form configuration
    setFormConfig([...formConfig, { type: selectedType, id: Date.now() }]);
    setAdd(false);
  };

  const handleDelete = (index) => {
    // Create a copy of the selectedFieldTypes array
    const updatedFieldTypes = [...selectedFieldTypes];
    // Remove the element at the specified index
    updatedFieldTypes.splice(index, 1);
    setSelectedFieldTypes(updatedFieldTypes);
    // Update form configuration
    const updatedConfig = [...formConfig];
    updatedConfig.splice(index, 1);
    setFormConfig(updatedConfig);
  };
  // Function to save form configuration as JSON
  const saveFormConfig = () => {
    if (selectedFieldTypes.length === 0) {
      setIsWarning(true);
      setWarningMessage("Select at least one form field before submitting");
    } else {
      const jsonConfig = JSON.stringify(formConfig);
      localStorage.setItem("formConfig", jsonConfig);
      loadFormConfig();
      setIsSubmitted(true);
    }
  };

  // Function to load form configuration from JSON
  const loadFormConfig = () => {
    const jsonConfig = localStorage.getItem("formConfig");
    if (jsonConfig) {
      setFormConfig(JSON.parse(jsonConfig));
    }
    console.log(formConfig);
  };
  const handleCreateNewForm = () => {
    setIsSubmitted(false);
    setIsWarning(false);
    setSelectedFieldTypes([]);
  };
  return (
    <div>
      {isSubmitted ? (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
          <p className="text-3xl font-bold">
            Thank you, form is submitted successfully!!
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-green-500 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={handleCreateNewForm}
          >
            Create new form
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen">
          <div className="flex flex-row items-start justify-start">
            <div className="bg-white rounded-md p-10 border border-black border-[1px] w-[500px] h-full flex flex-col gap-4 border-purple-500 border-t-[20px]">
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
                      <button
                        className="bg-[gray] text-white text-sm rounded-sm px-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <div className="w-full h-[1px] bg-purple-100 mt-2"></div>
                    </div>
                  )}
                  {type === "text-area input" && (
                    <div>
                      <TextArea />
                      <button
                        className="bg-[gray] text-white text-sm rounded-sm px-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <div className="w-full h-[1px] bg-purple-100 mt-2"></div>
                    </div>
                  )}
                  {type === "dropdown" && (
                    <div>
                      <DropDown />
                      <button
                        className="bg-[gray] text-white text-sm rounded-sm px-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <div className="w-full h-[1px] bg-purple-100 mt-2"></div>
                    </div>
                  )}
                  {type === "checkbox" && (
                    <div>
                      <CheckBox />
                      <button
                        className="bg-[gray] text-white text-sm rounded-sm px-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <div className="w-full h-[1px] bg-purple-100 mt-2"></div>
                    </div>
                  )}
                  {type === "radio buttons" && (
                    <div>
                      <RadioButton />
                      <button
                        className="bg-[gray] text-white text-sm rounded-sm px-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <div className="w-full h-[1px] bg-purple-100 mt-2"></div>
                    </div>
                  )}
                </div>
              ))}
              {isWarning && selectedFieldTypes.length === 0 && (
                <p className="text-[red]">{warningMessage}</p>
              )}
              <button
                className="bg-purple-900 text-white p-2 rounded-md border border-gray-400 hover:bg-white hover:text-black hover:border-gray-700"
                onClick={saveFormConfig}
              >
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
                <div className="flex flex-col">
                  <label className="font-semibold">
                    Enter type of form field you want to create
                  </label>
                  <select
                    className="border border-black rounded-[4px] mt-2"
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
          {/* Add buttons to save and load form configuration */}
          {/* <button onClick={saveFormConfig}>Save Form Configuration</button> */}
          {/* <button onClick={loadFormConfig}>Load Form Configuration</button> */}
        </div>
      )}
    </div>
  );
}

export default FormBuilder;
