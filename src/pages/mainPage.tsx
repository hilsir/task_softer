import React, {useState} from 'react';
import OnDragFiles from "../components/OnDragFiles";
import ElementsList from "../components/ElementsList";

const MainPage = () => {
    const [dataFiles, setDataFiles] = useState([]);
    const handleDataFiles = (data: any) => {
        if ((dataFiles.length + data.length) <= 100) {
            let a: any = [...dataFiles, ...data];
            setDataFiles(a)
        }
    };

    return (
        <div>
            <OnDragFiles Data={handleDataFiles}/>
            <ElementsList dataFiles={dataFiles}/>
        </div>
    );
};

export default MainPage;