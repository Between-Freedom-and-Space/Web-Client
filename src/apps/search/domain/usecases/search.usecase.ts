import {injectable} from "inversify";
import {SearchResult, SearchResultFailure} from "./search-usecase.types";

@injectable()
export class SearchUseCase {

    public async search(text: string): Promise<SearchResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as SearchResultFailure
    }
}