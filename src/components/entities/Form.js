import React, { useState } from "react";
import Imprint from "./Imprint";

const Form = () => {

    const [inputValue, setInputValue] = useState(``);
    const [selectValue, setSelectValue] = useState(`Именительный`);

    return (
        <div>

            <form action="#" method="POST">

                <p>Введите слово на русском языке в именительном падеже, единственном числе</p>

                <p>
                    <input type="text" name="enter" value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </p>

                <p>Выберите падеж</p>

                <p>
                    <select name="case[]" value={selectValue}
                        onChange={e => setSelectValue(e.target.value)}
                    >
                        <option value="Именительный" selected>Именительный</option>
                        <option value="Родительный">Родительный</option>
                        <option value="Дательный">Дательный</option>
                        <option value="Винительный">Винительный</option>
                        <option value="Творительный">Творительный</option>
                        <option value="Предложный">Предложный</option>
                    </select>
                </p>


                <p>Слово в выбранном падеже:  </p>
                <Imprint word={inputValue} caseOfWord={selectValue} />

            </form>

        </div>
    )
};

export default Form;