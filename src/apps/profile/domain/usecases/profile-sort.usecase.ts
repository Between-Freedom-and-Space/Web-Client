// noinspection JSMethodCanBeStatic

import {injectable} from "inversify";
import {ProfilePost} from "../../redux/types";
import {SortField, SortType} from "../../components/profile-posts/posts-controls/types";

@injectable()
export class ProfileSortUseCase {

    public sortUserPosts(
        posts: Array<ProfilePost>,
        sortField: SortField,
        sortType: SortType
    ): Array<ProfilePost> {
        let comparator: (left: ProfilePost, right: ProfilePost) => number

        switch (sortField) {
        case SortField.DATE: {
            comparator = this.dateComparator
            break
        }
        case SortField.LIKES: {
            comparator = this.likesComparator
            break
        }
        case SortField.VIEWS: {
            comparator = this.viewsComparator
            break
        }
        }

        const sortedPosts = posts.sort(comparator)

        if (sortType === SortType.DESC) {
            return sortedPosts.reverse()
        } else {
            return sortedPosts
        }
    }

    private dateComparator(left: ProfilePost, right: ProfilePost): number {
        if (left.createdAt.getMilliseconds() === right.createdAt.getMilliseconds()) {
            return 0
        }
        if (left.createdAt.getMilliseconds() > right.createdAt.getMilliseconds()) {
            return -1
        } else {
            return 1
        }
    }

    private likesComparator(left: ProfilePost, right: ProfilePost): number {
        if (left.likesCount === right.likesCount) {
            return 0
        }
        if (left.likesCount > right.likesCount) {
            return -1
        } else {
            return 1
        }
    }

    private viewsComparator(left: ProfilePost, right: ProfilePost): number {
        return 1 // TODO not implemented yet
    }
}