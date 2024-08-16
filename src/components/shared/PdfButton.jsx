import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import PropTypes from "prop-types";

function PdfButton({ printRef }) {
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className="gap-1 h-7"
      onClick={handleDownloadPdf}
    >
      <FileText className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">PDF</span>
    </Button>
  );
}

PdfButton.propTypes = {
  printRef: PropTypes.object.isRequired,
};

export default PdfButton;
