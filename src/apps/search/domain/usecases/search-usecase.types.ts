import {PostBaseInformation, ProfileBaseInformation} from "../../redux/types";

export interface SearchResult {
    type: 'success' | 'failure'
}

export interface SearchResultFailure extends SearchResult {
    type: 'failure'
    message: string
}

export interface SearchResultSuccess extends SearchResult {
    type: 'success'
    foundPosts: Array<PostBaseInformation>
    foundProfiles: Array<ProfileBaseInformation>
}