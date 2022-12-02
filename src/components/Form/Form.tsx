import formStyle from "./form.module.scss";

interface FormProps {
    name: string;
    label: string;
    placeholder: string;
    type: "button" | "submit" | "reset" | undefined;
    content: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    value: string
    onChangeFunc: (event: React.ChangeEvent) => void
}


function Form({ 
    name,
    label, 
    placeholder, 
    type, 
    content, 
    handleClick,
    value,
    onChangeFunc
    } : FormProps){

    return(
    <form className={formStyle.form}>
        <div className={formStyle.form__inputDiv}>
            <label className={formStyle.form__inputDiv__inputLabel} htmlFor={name}>{label}</label>
            <input 
                className={formStyle.form__inputDiv__inputField} 
                id={name} 
                placeholder={placeholder}
                maxLength={30}
                value={value}
                onChange={onChangeFunc}
            >
            </input>
        </div>
        <button 
            className={formStyle.form__buttonform} 
            type={type}
            onClick={handleClick}
        >
            {content}
        </button>
    </form>
    )
}

export default Form;