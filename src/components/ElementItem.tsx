import React, {useState} from 'react';
import {Card} from "antd";
import {yandexDiskAdd, yandexDiskDownloads} from "../http";

const ElementItem = (cardId: any) => {
    const [cardName, setCardName] = useState(cardId.dataFiles.name)
    const [cardType, setCardType] = useState(cardId.dataFiles.type)
    const [cardSize, setCardSize] = useState(cardId.dataFiles.size)

    function SendFile() {
        console.log("отправка " + cardName);
        yandexDiskAdd(cardId.dataFiles.name).then((data) => {
            try {
                yandexDiskDownloads(data.href, cardId.dataFiles).then((data) => {
                    try {
                        console.log(data)
                    } catch (e) {
                        console.log("sending failed")
                    }
                })
            } catch (e) {
                console.log("request error to send")
            }
        })
    }

    return (
        <Card
            title={cardName}
            style={{
                width: 200,
            }}
        >
            <div>
                {"Type: " + cardType}
                {"Size: " + cardSize + "байт"}
            </div>
            <button onClick={SendFile}>Отправить Файл</button>
        </Card>
    );
};

export default ElementItem;