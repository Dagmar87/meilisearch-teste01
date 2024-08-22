//Adicionar documentos
import { MeiliSearch } from "meilisearch";
import movies from "./movies.json";

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: "aSampleMasterKey",
});

client
  .index("movies")
  .addDocuments(movies)
  .then((res) => console.log(res));

//client.getTask(0)

//Pesquisa
client
  .index("movies")
  .search("botman")
  .then((res) => console.log(res));
