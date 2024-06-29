import React, { useState, useEffect } from 'react';
import FontFamilySelector from './FontFamilySelector';
import FontWeightSelector from './FontWeightSelector';

const fontsData = require('./punt-frontend-assignment.json');

const TextEditor: React.FC = () => {
  const [text, setText] = useState<string>(() => {
    const savedText = localStorage.getItem('text');
    return savedText || '';
  });

  const [selectedFontFamily, setSelectedFontFamily] = useState<string>(() => {
    const savedFontFamily = localStorage.getItem('fontFamily');
    return savedFontFamily || Object.keys(fontsData)[0];
  });

  const [selectedFontWeight, setSelectedFontWeight] = useState<string>(() => {
    const savedFontWeight = localStorage.getItem('fontWeight');
    return savedFontWeight || '400'; 
  });

  const [isItalic, setIsItalic] = useState<boolean>(() => {
    const savedIsItalic = localStorage.getItem('isItalic');
    return savedIsItalic === 'true';
  });

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem('fontFamily', selectedFontFamily);
  }, [selectedFontFamily]);

  useEffect(() => {
    localStorage.setItem('fontWeight', selectedFontWeight);
  }, [selectedFontWeight]);

  useEffect(() => {
    localStorage.setItem('isItalic', isItalic.toString());
  }, [isItalic]);

  const handleReset = () => {
    setText('');
    setSelectedFontFamily(Object.keys(fontsData)[0]);
    setSelectedFontWeight('400');
    setIsItalic(false);
  };

  const handleSave = () => {
    alert('Save functionality can be implemented here.');
  };

  return (
    <div>
      <div>
        <FontFamilySelector
          selectedFontFamily={selectedFontFamily}
          fonts={Object.keys(fontsData)}
          onSelect={setSelectedFontFamily}
        />
        <FontWeightSelector
          selectedFontWeight={selectedFontWeight}
          weights={Object.keys(fontsData[selectedFontFamily])}
          onSelect={setSelectedFontWeight}
        />
        <label>
          Italic:{' '}
          <input
            type="checkbox"
            checked={isItalic}
            onChange={() => setIsItalic(!isItalic)}
          />
        </label>
      </div>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            fontFamily: selectedFontFamily,
            fontWeight: selectedFontWeight,
            fontStyle: isItalic ? 'italic' : 'normal',
            fontSize: '16px',
            width: '100%',
            minHeight: '200px',
            padding: '10px'
          }}
        />
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default TextEditor;
