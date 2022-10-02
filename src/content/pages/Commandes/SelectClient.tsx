import React, { useEffect } from 'react';
import Select from 'react-select';
type SelectClienttype = {
  selectedOption: any;
  setSelectedOption: Function;
  setNomClient: Function;
  setidClient: Function;
  listeClients: any;
};
function SelectClient({
  selectedOption,
  setSelectedOption,
  setidClient,
  setNomClient,
  listeClients
}: SelectClienttype) {
  return (
    <div style={{ width: '17rem' }}>
      <Select
        defaultValue={selectedOption}
        onChange={(e: any) => {
          // setSelectedOption({
          // 	nomclient: e.label,
          // 	client_id: e.value,
          // });
          setSelectedOption(e.value);
          //	e.value === 0 ? getOrders() : getListCommand(e.value);
          setNomClient(e.label); /*Pour récupérer le nom du clt*/
          setidClient(e.value);
        }}
        options={listeClients}
      />
    </div>
  );
}

export default SelectClient;
