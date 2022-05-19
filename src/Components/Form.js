import { useState } from "react";
import Item from "./Item";
import { v4 as uuid } from "uuid";

export default function Form() {

    const [itemArr, setItemArr] = useState([
        {txt: "Promener le chien", id: uuid()},
        {txt: "Sport", id: uuid()},
        {txt: "Coder avec React", id: uuid()}
    ])

    const [inputState, setInputState] = useState()

    const changeInputState = (e) => {
        setInputState(e.target.value);
    }

    const deleteItem = id => {
        const newItemArr = itemArr.filter(item => {
            return item.id !== id;
        });
        setItemArr(newItemArr);
    }

    const changeItemArr = (e) => {
        e.preventDefault();
        const newItemArr = [...itemArr];
        newItemArr.push({
            txt: inputState,
            id: uuid()
        });
        setItemArr(newItemArr);
        setInputState('');
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3" onSubmit={e => changeItemArr(e)}>
                <label htmlFor="todo" className="form-label mt-3">Choses à faire</label>
                <input 
                type="text" 
                className="form-control" 
                id="todo" 
                value={inputState} 
                onInput={e => changeInputState(e)} />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>
            <h2>Liste des choses à faire :</h2>
            <ul className="li list-group">
                {itemArr.map((item, index) => {
                    return (
                        <Item 
                        txt={item.txt} 
                        key={item.id} 
                        id={item.id} 
                        delFunc={deleteItem} 
                        />
                    )
                })}
            </ul>
        </div>
    )
}