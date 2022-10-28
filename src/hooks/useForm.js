import { useState } from 'react';


export const useForm = (initialState = {}) => {
  const [stateForm, setStateForm] = useState(initialState);

  const handleChangeForm = (e) => {
    const { value, name } = e.target;

    setStateForm({
      ...stateForm,
      [name]: value,
    });
  }

  return {
    stateForm,
    handleChangeForm,
  }
}
