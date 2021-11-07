import { CircularProgress } from "@mui/material";
import React from "react";
import { getAllTestList, IAllList } from "../../Services/TestServices";

const Home = () => {
    const [dataList, setDataList] = React.useState<IAllList | null>(null);

    React.useEffect(() => {
        getAllTestList().then((data) => {
            setDataList(data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (!dataList ?
        <div>
            <span style={{ marginRight: 16 }}>Geting data from server apid: </span>
            <CircularProgress />
        </div> :
        <div>
            <p style={{ color: "red", fontWeight: "bold" }}>Data list From server: </p>
            {dataList.entries.map((item, i) => (
                <p key={i}>
                    <span style={{ fontWeight: "bold" }}>{item.API}</span>: -
                    {item.Description}
                </p>
            ))}
        </div>
    )
}

export default Home;