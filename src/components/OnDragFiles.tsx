import React, {useState} from 'react';

const OnDragFiles = ({Data}:any) => {
    const [drag, setDrag] = useState(false)
    let files

    function dragStartHandler(e:React.MouseEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e:React.MouseEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e:any){
        e.preventDefault()
        files = [...e.dataTransfer.files]
        setDrag(false)
        Data(files);
    }

    return (
        <div>
            {drag ?
                <div className={"drop-area"}
                     onDragStart={e => dragStartHandler(e)}
                     onDragLeave={e => dragLeaveHandler(e)}
                     onDragOver={e => dragStartHandler(e)}
                     onDrop={e => onDropHandler(e)}

                >Отпустите файлы, чтобы загрузить их</div>
                :
                <div className={"drop-area"}
                     onDragStart={e => dragStartHandler(e)}
                     onDragLeave={e => dragLeaveHandler(e)}
                     onDragOver={e => dragStartHandler(e)}

                > Перетащите файлы, чтобы загрузить их</div>
            }
        </div>
    );
};

export default OnDragFiles;
