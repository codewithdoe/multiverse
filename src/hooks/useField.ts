import { useContext } from 'react';
import { FieldContext } from '../contexts/FieldContext';

const useField = () => {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error('FieldProvider is not available');
  }

  return context;
};

export default useField;
