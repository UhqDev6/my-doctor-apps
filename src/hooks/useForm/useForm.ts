import {useState} from 'react';
const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (params: any) => {
      return setValues(params);
    },
  ];
};

export default useForm;
