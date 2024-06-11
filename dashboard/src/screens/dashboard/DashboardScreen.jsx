import { AreaCards, AreaCharts, AreaTable, AreaTop, Navbar } from "../../components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
      <Navbar/>
    </div>
  );
};

export default Dashboard;