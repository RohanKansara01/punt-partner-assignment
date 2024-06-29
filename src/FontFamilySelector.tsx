import React from 'react';

interface FontFamilySelectorProps {
  selectedFontFamily: string;
  fonts: string[];
  onSelect: (fontFamily: string) => void;
}

const FontFamilySelector: React.FC<FontFamilySelectorProps> = ({
  selectedFontFamily,
  fonts,
  onSelect
}) => {
  return (
    <select value={selectedFontFamily} onChange={(e) => onSelect(e.target.value)}>
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontFamilySelector;
