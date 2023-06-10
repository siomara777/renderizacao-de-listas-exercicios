import React from "react";

const ListasRemovidas = ({ lista }) => {
  const renderizaLista = lista.map((item, index) => {
    return (
      <li
        style={{
          textDecoration: "line-through",
          width: "400px",
        //   backgroundColor: "blue",
          height: "50px",
          marginBottom: "20px",
          listStyle: "none",
          borderRadius: "8px",
          border: "3px solid black",
          color: "#746c6c",
          display: "flex",
          alignItems: "center",
          

        }}
        key={index}
      >
        {item}
      </li>
    );
  });
  return <ul>{renderizaLista}</ul>;
};

export default ListasRemovidas;
