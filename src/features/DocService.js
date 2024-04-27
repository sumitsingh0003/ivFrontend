import { savePDF } from '@progress/kendo-react-pdf';
class DocService {
    createPdf = (html) => {
        const a = document.getElementById("pdf_inside_name")?.innerHTML;
        savePDF(html, {
            paperSize: 'letter',
            fileName: `${a ? "Invoice-" + a : "Invoice"}.pdf`,
            margin: 0
        });
    };
}

const Doc = new DocService();
export default Doc;