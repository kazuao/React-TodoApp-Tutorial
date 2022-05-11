import { useCallback, useState } from "react";
import classes from "./Todo.module.scss";

import { Item } from "../../types/item";
import { TodoInput } from "../../blocks/TodoInput";
import { TodoAdd } from "../../blocks/TodoAdd";
import { TodoDones } from "../../blocks/TodoDones";

const getKey = () => Math.random().toString(32).substring(2);

export const Todo = () => {
    const [items, setItems] = useState<Array<Item>>([{ key: getKey(), text: 'これはダミーのTODOです', done: false }]);
    const [itemsDone, setItemsDone] = useState<Array<Item>>([]);
    const [text, setText] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false);

    const onAdd = useCallback((inputText: string) => {
        setItems([...items, { key: getKey(), text: inputText, done: false }]);
    },
    [items]
    );

    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <div className={classes.main}>
                    <h1 className={classes.heading}>やることリスト</h1>
                    <TodoInput onAdd={onAdd} text={text} setText={setText} typing={typing} setTyping={setTyping} />
                    <TodoAdd items={items} setItems={setItems} itemsDone={itemsDone} setItemsDone={setItemsDone} />
                </div>
                <TodoDones itemsDone={itemsDone} />
            </div>
        </div>
    );
};
