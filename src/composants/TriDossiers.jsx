import "./TriDossiers.scss";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function TriDossiers({ trierDossiers }) {
  // état du tri des dossiers
  const [tri, setTri] = trierDossiers;

  return (
    <div className="TriDossiers">
      <InputLabel id="demo-simple-select-label">Tri des dossiers</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={tri}
        defaultValue={0}
        onChange={(e) => setTri(e.target.value)}
      >
        <MenuItem value={0}>
          Date de modification descendante
        </MenuItem>
        <MenuItem value={1}>Nom de dossier ascendant</MenuItem>
        <MenuItem value={2}>Nom de dossier descendant</MenuItem>
      </Select>
    </div>
  );
}
