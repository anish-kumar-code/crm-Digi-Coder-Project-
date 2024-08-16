import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";

function TableSearch({ handleSearch, search }) {
  return (
    <>
      <Input
        placeholder="Search in records..."
        className="max-w-xs "
        id="search"
        type="text"
        value={search}
        onChange={(event) => handleSearch(event)}
      />
    </>
  );
}

TableSearch.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default TableSearch;
