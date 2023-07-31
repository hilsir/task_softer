import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import ElementItem from "./ElementItem";
import {v4} from "uuid";

interface ElementsListProps {
    dataFiles: File[]
}

const ElementsList = observer((props: ElementsListProps) => {
    const [cardsQuantity, setCardsQuantity] = useState(0)
    const {dataFiles} = props
    let cards: any = new Array();

    if (dataFiles.length) {
        for (let i = 0; i < dataFiles.length; i++) {
            cards.push(<ElementItem
                id={i}
                key={v4()}
                dataFiles={dataFiles[i]}
            />);
        }
    }

    return (
        <div>
            <h1>Файлы</h1>
            <div>{cards.length} /100 файлов</div>
            <div className="grid＿container grid＿container＿fit">
                {cards}
            </div>
        </div>

    );
});

export default ElementsList;
