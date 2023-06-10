import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";
import ListasRemovidas from "../ListaRemovidas/ListaRemovidos";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const [listaRemovida, setListaRemovidas] = useState([])

  const adicionarItemRemovido = (item) => {

  const novaLista = [...listaRemovida, item] 

  setListaRemovidas(novaLista)


  }

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if (novaTarefa === "") {
      return;
    }
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((_, index) => index !== tarefa);
    setLista(listaFiltrada);
  };
  const enter = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  };
console.log(listaRemovida)

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={enter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => {
                  removeTarefa(index)
                  adicionarItemRemovido(tarefa)

                }}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListasRemovidas lista={listaRemovida} />
      
    </ListaTarefasContainer>
  );
}

// import { useState } from "react";
// import {
//   InputContainer,
//   ListaContainer,
//   ListaTarefasContainer,
//   Tarefa,
//   TaskInput,
//   AddTaskButton,
//   RemoveButton,
// } from "./styled";
// import bin from "../../assets/bin.png";

// export function ListaTarefas() {
//     const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
//     const [novaTarefa, setNovaTarefa] = useState("");

//     const onChangeTarefa = (event) => {
//       setNovaTarefa(event.target.value);
//     };
// // export function ListaTarefas() {

// //   const [novaTarefa, setNovaTarefa] = useState("");
// //   const [lista, setLista] = useState([])

// //   const onChangeTarefa = (event) => {
// //     setNovaTarefa(event.target.value);
// //   };

//   const adicionaTarefa = () => {
//     /* const listaNovaTarefa = [...lista, novaTarefa]
//     setLista(listaNovaTarefa) */

//     //verificação com if para não adicionar uma tarefa vazia
//     if (novaTarefa !== "") {
//       setLista([...lista, novaTarefa])
//       setNovaTarefa("")
//     }
//   };

//   const removeTarefa = (indiceRemover) => {
//     console.log(indiceRemover);

//     const listaFiltrada = lista.filter((tarefa, index) => index !== indiceRemover)

//     console.log(listaFiltrada);

//     setLista(listaFiltrada)

//   };

//   const listaRenderizada = lista.map((item, index) => {
//     return <Tarefa key={index}> <p>{item}</p>
//       <RemoveButton onClick={() => removeTarefa(index)}>
//         <img src={bin} alt="" width="16px" />
//       </RemoveButton>
//     </Tarefa>
//   })

//   //console.log(listaRenderizada);

//   return (
//     <ListaTarefasContainer>
//       <InputContainer>
//         <TaskInput
//           placeholder="Digite aqui uma tarefa"
//           value={novaTarefa}
//           onChange={onChangeTarefa}
//         />
//         <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
//       </InputContainer>

//       <ListaContainer>
//         <ul>
//           {listaRenderizada}
//           {/* {lista.map((item, index) => {
//             return <Tarefa key={index}> <p>{item}</p>
//             <RemoveButton onClick={removeTarefa}>
//               <img src={bin} alt="" width="16px" />
//             </RemoveButton>
//           </Tarefa>
//           })}  */}

//         </ul>
//       </ListaContainer>
//     </ListaTarefasContainer>
//   );
// }
