import {useState, useEffect, useCallback} from "react";

interface NewFormProps {
    defaultValue?: string;
}


const storageInputData = 'inputData';


export const NewForm = (props?: NewFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('empty value');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const formValidated = !(displayError || !inputValue);

    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('Too short data');
            }

            if (messageLength > 20) {
                setErrorMessage('Too long data');
            }
            setDisplayError(true);
        } else {
            setDisplayError(false);
            setErrorMessage('');
        }
    }

    const handleSubmit = useCallback(() => {
        if (formValidated) {
            localStorage.setItem(storageInputData, inputValue);
        }
    }, [inputValue, formValidated])

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageInputData);
        if (!!localStorageData) {
            valueToSet = localStorageData;
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }

        setInputValue(valueToSet);
    }, [props?.defaultValue])

    return <div style={{display: "flex", flexDirection: 'column'}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>Data:</div>
        <input onInput={handleInputChange} value={inputValue} type="text" />
        <br />
        <button onClick={handleSubmit} disabled={!formValidated}>Submit data</button>
    </div>
}