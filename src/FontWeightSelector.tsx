import React from 'react';

interface FontWeightSelectorProps {
  selectedFontWeight: string;
  weights: string[];
  onSelect: (fontWeight: string) => void;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({
  selectedFontWeight,
  weights,
  onSelect
}) => {
  return (
    <select value={selectedFontWeight} onChange={(e) => onSelect(e.target.value)}>
      {weights.map((weight) => (
        <option key={weight} value={weight}>
          {weight}
        </option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
