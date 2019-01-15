import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import sampleData from "./sampleData.json"

class App extends React.Component {
  state = {
    page: 0,
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
/*
  changePage = page => {
    this.xhrRequest(`/myApiServer?page=${page}`).then(data => {
      this.setState({
        page: page,
        data
      });
    });
  };

*/
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
          filter: true,
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
    const { data, page, count } = this.state;

    const options = {
      responsive: "scroll",
      serverSide: false,
      page: page,
      /*onTableChange: (action, tableState) => {
        console.log(action, tableState);
        // a developer could react to change on an action basis or
        // examine the state as a whole and do whatever they want

        switch (action) {
          case "changePage":
            this.changePage(tableState.page);
            break;
        }
      }*/
    };

    return (
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
