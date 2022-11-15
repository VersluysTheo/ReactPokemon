import SearchAppBar from "./Header";
import Jumbotroncard from "./Section";

export default function FormApp() {
  return (
    <div>
    <SearchAppBar/>
    <Jumbotroncard/>
    <form action="" method="POST" enctype="multipart/form-data">
    <div class="container">
    <label for="nom">Nom : </label>
    <input type="text" name="nom"/>
    <label for="id">Id : </label>
    <input type="number" name="id"/>
    <label for="type">Type : </label>
    <input type="text" name="type"/>
    <input type="file" id="imgpok" name="imgpok"/>
    </div>
    <input type="submit" name="pokemon" value="Envoyer"></input>
    </form>
    </div>
  );
}