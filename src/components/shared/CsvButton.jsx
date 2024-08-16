import { Button } from "@/components/ui/button";
import { Sheet } from "lucide-react";
import propTypes from "prop-types";

function CsvButton({ filteredData }) {
  const escapeCsvCell = (cell) => {
    if (cell == null) {
      return "";
    }
    const sc = cell.toString().trim();
    if (sc === "" || sc === '""') {
      return sc;
    }
    if (
      sc.includes('"') ||
      sc.includes(",") ||
      sc.includes("\n") ||
      sc.includes("\r")
    ) {
      return '"' + sc.replace(/"/g, '""') + '"';
    }
    return sc;
  };

  const makeCsvData = (columns, data) => {
    return data.reduce(
      (csvString, rowItem) => {
        return (
          csvString +
          columns
            .map(({ accessor }) => escapeCsvCell(accessor(rowItem)))
            .join(",") +
          "\r\n"
        );
      },
      columns.map(({ name }) => escapeCsvCell(name)).join(",") + "\r\n",
    );
  };

  const downloadAsCsv = (columns, data, filename) => {
    const csvData = makeCsvData(columns, data);
    const csvFile = new Blob([csvData], { type: "text/csv" });
    const downloadLink = document.createElement("a");

    downloadLink.display = "none";
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDownloadCsv = () => {
    const columns = [
      { accessor: (item) => item.name, name: "Task" },
      { accessor: (item) => item.designation, name: "Designation" },
      { accessor: (item) => item.role, name: "Role" },
      {
        accessor: (item) =>
          item.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
        name: "Date",
      },
    ];

    downloadAsCsv(columns, filteredData.nodes, "table");
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className="gap-1 h-7"
      onClick={handleDownloadCsv}
    >
      <Sheet className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">CSV</span>
    </Button>
  );
}

CsvButton.propTypes = {
  filteredData: propTypes.object.isRequired,
};

export default CsvButton;
