import React, { useState } from 'react';

import {
  TagWrapper,
  TagContainer,
  TagItem,
  TagItemDelete,
  TagInput,
  TagItemList,
} from '../../../../../../Pages/Product/ProductUpload.style.js';

import { FormWrapper } from '../../../../../../Assets/Styles/Form.style.js';

function TagsView({ handleValue, dbSavedValue, data }) {
  const { prop, type, placeholder } = data;
  const initialTags = dbSavedValue || [];
  const [pdtags, setPdtags] = useState(initialTags);

  const handleTags = (e) => {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setPdtags([...pdtags, value]);
    handleValue('pdtags', [...pdtags, value]);
    e.target.value = '';
    e.preventDefault();
  };

  const removePdTag = (index) => {
    setPdtags(pdtags.filter((el, i) => i !== index));
    handleValue(pdtags, [...pdtags]);
  };

  return (
    <TagWrapper>
      <TagContainer>
        <TagItemList>
          {pdtags.map((tag, index) => (
            <TagItem key={index}>
              <span className="text">{tag}</span>
              <TagItemDelete onClick={() => removePdTag(index)}>
                &times;
              </TagItemDelete>
            </TagItem>
          ))}
        </TagItemList>
        <FormWrapper>
          <TagInput
            type={type}
            name={prop}
            onKeyPress={handleTags}
            placeholder={placeholder}
          />
        </FormWrapper>
      </TagContainer>
    </TagWrapper>
  );
}

export default TagsView;
