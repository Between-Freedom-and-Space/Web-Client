import {Container} from "inversify";
import {SearchApi} from "../api/endpoints/search/search-api";
import {TYPES} from "./types";
import {SearchApiImpl} from "../api/impl/search-api-impl";
import {SearchUseCase} from "../domain/usecases/search.usecase";
import {SearchSortUseCase} from "../domain/usecases/search-sort.usecase";

const searchContainer = new Container({
    defaultScope: "Singleton"
})

searchContainer
    .bind<SearchApi>(TYPES.SearchApi)
    .to(SearchApiImpl)

searchContainer
    .bind<SearchUseCase>(SearchUseCase)
    .toSelf()
searchContainer
    .bind<SearchSortUseCase>(SearchSortUseCase)
    .toSelf()

export default searchContainer