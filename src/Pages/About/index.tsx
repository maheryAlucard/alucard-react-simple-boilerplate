import { CircularProgress } from "@mui/material";
import React from "react";
import { getRandom, IAllList } from "../../Services/TestServices";

const About = () => {
    const [dataList, setDataList] = React.useState<IAllList | null>(null);

    React.useEffect(() => {
        getRandom().then((data) => {
            setDataList(data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (!dataList ?
        <div>
            <span style={{ marginRight: 16 }}>Geting Random data from server apid: </span>
            <CircularProgress />
        </div> :
        <div>
            <p style={{ color: "red", fontWeight: "bold" }}>Random data list From server: </p>
            {dataList.entries.map((item, i) => (
                <p key={i}>
                    <span style={{ fontWeight: "bold" }}>{item.API}</span>:
                    {item.Description}
                </p>
            ))}
        </div>)
}

export { About }