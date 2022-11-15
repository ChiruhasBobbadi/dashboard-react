// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// import ReactPDF from '@react-pdf/react-pdf';



// const MyDoc = () => (
//     <Document>
//         <Page size="A4" >
//             <View >
//                 <Text>Name</Text>
//             </View>
//             <View >
//                 <Text>
//                     <p>Bill ID : 110ec58a-a0f2-4ac4-8393-c866d813b8d1</p>
//                     <p>Due Date : 11-24-2022</p>
//                     <p>Water Usage : 10 Gallons</p>
//                     <p>Electricity Usage : 10 KWH</p>
//                     <p>Total Amount : 10 $</p>
//                 </Text>
//             </View>
//         </Page>
//     </Document>
// );


const InvoiceDownloader = () => (
    <div>
        {/* <PDFDownloadLink document={<MyDoc />} fileName="invoice.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink> */}

      {/* <a href={pdf} download="FileName.pdf">Download</a> */}
{/* https://stackoverflow.com/questions/69289110/how-to-create-a-download-link-pdf-in-react */}
    </div>
)

export default InvoiceDownloader;
