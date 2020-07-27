import * as React from 'react';

import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Cadastro } from './styles';

const CreatePost: React.SFC<{}> = () => {
  return (
    <Cadastro>
    <h2>Crie sua postagem</h2>
    <div>
      <input placeholder="Titulo" />

      <form>
        <strong>Categoria</strong>
        <input type="checkbox" name="um" />
        <p>1</p>
        <input type="checkbox" name="dois" />
        <p>2</p>
        <input type="checkbox" name="três" />
        <p>3</p>
      </form>
      <Editor />
      <button type="button">ENVIAR</button>
    </div>
  </Cadastro>
  );
};

export default CreatePost;