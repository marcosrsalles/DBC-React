import apiDbc from "../../api";

export const getPessoa = async (dispatch) => {
  try {
    const { data } = await apiDbc.get("/pessoa");
    const pessoas = {
      type: "SET_PESSOA",
      pessoas: data.content,
    };
    dispatch(pessoas);
  } catch (error) {
    alert(error);
  }
};

export const handleEditPessoa = (idPessoa, navigate) => {
  navigate(`/editar-pessoa/${idPessoa}`);
};
export const handleAddPessoa = (navigate) => {
  navigate("/cadastrar-pessoa");
};

export const handleEditFormPessoa = async (idPessoa, dispatch) => {
  try {
    const { data } = await apiDbc.get(
      `/pessoa/lista-completa?idPessoa=${idPessoa}`
    );
    const editarPessoa = {
      type: "SET_PESSOA_BY_ID",
      pessoa: data && data[0],
    };
    dispatch(editarPessoa);

    console.log(editarPessoa);
  } catch (error) {
    console.log(error);
  }
};

export async function handleUpdatePessoa(idPessoa, values) {
  try {
    await apiDbc.put(`/pessoa/${idPessoa}`, values);
    alert("editou pessoa");
  } catch (error) {
    console.log(error);
  }
}

export async function handleCreatePessoa(values) {
  try {
    await apiDbc.post("/pessoa", values);
    window.location.href = "/pessoa";
    alert("Criou a pessoa");
  } catch (error) {
    console.log(error);
  }
}

export async function handleDeletaPessoa(idPessoa) {
  try {
    await apiDbc.delete(`/pessoa/${idPessoa}`);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export async function handleAddEndereco(idPessoa, navigate) {
  navigate(`/cadastrar-endereco/${idPessoa}`);
}
