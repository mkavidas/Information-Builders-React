import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import sampleData from "./sampleData.json"

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getData();
  }

  // get data
  getData = () => {
    this.xhrRequest().then(data => {
      this.setState({ data });
    });
  };

  // mock async function
  xhrRequest = () => {
    return new Promise((resolve, reject) => {
        const srcData = sampleData.map(item => {
            return [
                item.TIME_DATE,
                item.STATE_PROV_CODE_ISO_3166_2,
                item.STORE_TYPE,
                item.BRANDTYPE,
                item.BRAND,
                item.MODEL,
                item.QUANTITY_SOLD,
                item.REVENUE_US,
            ]
        })
        
      setTimeout(() => {
        resolve(srcData);
      }, 250);
    });
  };

  render() {
    const columns = [
        {
         name: "Date",
         options: {
          filter: false,
          sort: true,
         }
        },
        {
         name: "State Code",
         options: {
          filter: false,
          sort: true,
         }
        },
        {
         name: "Store Type",
         options: {
          filter: false,
          sort: true,
         }
        },
        {
            name: "Brand Type",
            options: {
             filter: true,
             sort: true,
            }
        },
        {
            name: "Brand",
            options: {
             filter: true,
             sort: true,
            }
        },
        {
            name: "Model",
            options: {
             filter: true,
             sort: true,
            }
        },
        {
            name: "Quantity Sold",
            options: {
             filter: false,
             sort: true,
            }
        },
        {
            name: "Revenue",
            options: {
             filter: false,
             sort: true,
            }
        },
       ];
    const { data} = this.state;

    const options = {
      responsive: "scroll",
      serverSide: false,
    };

    return (
      <MUIDataTable
        title={"Information Builders Project"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
