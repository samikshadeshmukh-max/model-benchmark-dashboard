type ModelSelectorProps = {
  models: string[];
  selectedModels: string[];
  onChange: (models: string[]) => void;
};

function ModelSelector({
  models,
  selectedModels,
  onChange,
}: ModelSelectorProps) {
  const handleChange = (model: string) => {
    if (selectedModels.includes(model)) {
      onChange(selectedModels.filter((item) => item !== model));
    } else {
      onChange([...selectedModels, model]);
    }
  };

  return (
    <div className="model-selector">
      <h2>Select Models</h2>

      {models.map((model) => (
        <label key={model}>
          <input
            type="checkbox"
            checked={selectedModels.includes(model)}
            onChange={() => handleChange(model)}
          />
          {model}
        </label>
      ))}
    </div>
  );
}

export default ModelSelector;