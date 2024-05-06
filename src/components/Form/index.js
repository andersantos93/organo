import TextField from "../TextField";
import DropdownList from "../DropdownList";

import "./Form.css";

const Form = () => {
    const teams = [
        'Development',
        'Front-End',
        'Data Science',
        'DevOps',
        'Ux e Design',
        'Mobile',
        'Innovation and Managment'
    ];

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite o seu nome" />
                <TextField label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Time" itens={teams}></DropdownList>
            </form>
        </section>
    )
}

export default Form;