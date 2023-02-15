import Layout from "./Components/Layout";
import ReportGrid from "./Components/ReportGrid";
import TableTwoCols from "./Components/TableTwoCols";
import { TwoColsTableData } from "./MockData/Data";
function App() {
  return (
    <div className="App">
      <Layout>
        <ReportGrid>
          <TableTwoCols data={TwoColsTableData} />
        </ReportGrid>
      </Layout>
    </div>
  );
}

export default App;
