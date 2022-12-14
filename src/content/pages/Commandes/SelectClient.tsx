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
    <div className="select_cl">
      <Select
        defaultValue={selectedOption}
        onChange={(e: any) => {
          setSelectedOption(e.value);
          setNomClient(e.label); /*Pour récupérer le nom du clt*/
          setidClient(e.value);
        }}
        options={listeClients}
      />
    </div>
  );
}

export default SelectClient;
