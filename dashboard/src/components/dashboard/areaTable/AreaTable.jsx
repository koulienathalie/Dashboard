import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "User",
  "Traffic",
];

const TABLE_DATA = [
  {
    id: 100,
    user: "192.168.110.171",
    traffic: "44.8 KB",
  },
  {
    id: 101,
    user: "172.22.64.56",
    traffic: "24.3 KB",
  },
  {
    id: 102,
    user: "172.22.86.35",
    traffic: "17.3 KB",
  },
  {
    id: 103,
    user: "172.22.64.154",
    traffic: "15.1 KB",
  },
  {
    id: 104,
    user: "172.22.64.164",
    traffic: "10.2 KB",
  },
  {
    id: 105,
    user: "172.22.68.111",
    traffic: "6.4 KB",
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Top Users</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.user}</td>
                  <td>{dataItem.traffic}</td>
                    <AreaTableAction />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;