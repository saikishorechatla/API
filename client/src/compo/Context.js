import { useState, createContext, useContext } from 'react';

const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [vData, setVData] = useState([]);
  const [id, setId] = useState(0);

  const updateVData = (newData) => {
    setVData(newData);
  };

  const updateId = (newId) => {
    setId(newId);
  };

  return (
    <CustomContext.Provider
      value={{
        vData,
        updateVData,
        id,
        updateId,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export const useCustomContext = () => {
  return useContext(CustomContext);
};
