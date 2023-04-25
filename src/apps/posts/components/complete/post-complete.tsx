import React, {useEffect} from "react";
import styles from './post-complete.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../config/redux.config";
import PostCompleteHeader from "./header/post-complete-header";
import PostCompleteContent from "./content/post-complete-content";
import PostReactionControls from "../common/reaction-controls/post-reaction-controls";
import PostCompleteComments from "./comments/post-complete-comments";
import {PostCompleteHeaderController} from "./header/types";
import {PostReactionControlsController} from "../common/reaction-controls/types";
import {PostCompleteCommentController} from "./comments/types";
import {getProfileRouting} from "../../../../config/routings.config";
import {notificationActions} from "../../../../common/services/notifications/redux/slice";
import {postCompleteActions} from "../../redux/complete-slice";
import {followProfileThunk, getPostThunk, reactCommentThunk, reactPostThunk} from "../../redux/complete-reducers";
import {PostReactionState} from "../common/types";
import {CommentReactionState} from "../../../../common/components/comments/types";

function PostComplete() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const postCompleteState = useAppSelector(root => root.postComplete)

    const { postId } = useParams()

    useEffect(() => {
        const postIdNumber = Number.parseInt(postId!)
        dispatch(postCompleteActions.changePostId(postIdNumber))
        dispatch(getPostThunk({postId: postIdNumber}))
    }, [])

    const headerController: PostCompleteHeaderController = {
        onAuthorIconClicked() {
            navigate(getProfileRouting(postCompleteState.authorId))
        },
        onAuthorNameClicked() {
            navigate(getProfileRouting(postCompleteState.authorId))
        },
        onAuthorNicknameClicked() {
            navigate(getProfileRouting(postCompleteState.authorId))
        },
        onFollowButtonClicked() {
            dispatch(followProfileThunk())
        },
    }
    const reactionsController: PostReactionControlsController = {
        onCommentClicked() {
            navigate(getProfileRouting(postCompleteState.authorId))
        },
        onDislikeClicked() {
            dispatch(reactPostThunk({
                postId: postCompleteState.postId,
                reactionState: PostReactionState.DISLIKED,
            }))
        },
        onLikeClicked() {
            dispatch(reactPostThunk({
                postId: postCompleteState.postId,
                reactionState: PostReactionState.LIKED,
            }))
        },
    }
    const commentsController: PostCompleteCommentController = {
        onCommentAuthorClicked(profileId: number) {
            navigate(getProfileRouting(profileId))
        },
        onCommentDislikeClicked(commentId: number) {
            dispatch(reactCommentThunk({
                postId: postCompleteState.postId,
                commentId: commentId,
                reactionState: CommentReactionState.DISLIKED
            }))
        },
        onCommentLikeClicked(commentId: number) {
            dispatch(reactCommentThunk({
                postId: postCompleteState.postId,
                commentId: commentId,
                reactionState: CommentReactionState.LIKED
            }))
        },
    }

    if (postCompleteState.errorMessage) {
        dispatch(notificationActions.addNotification({
            id: "1",
            type: 'danger',
            title: 'Error',
            message: postCompleteState.errorMessage
        }))
        dispatch(postCompleteActions.errorShown())
    }

    return (
        <div className={styles.topContainer}>
            <PostCompleteHeader
                nickname={postCompleteState.authorNickname}
                name={postCompleteState.authorName}
                isUserFollowing={postCompleteState.isUserFollowing}
                isFollowLoading={postCompleteState.isFollowLoading}
                controller={headerController}
            />
            <PostCompleteContent
                title={postCompleteState.postTitle}
                text={postCompleteState.postText}
            />
            <div className={styles.postControlsWrapper}>
                <PostReactionControls
                    likesCount={postCompleteState.postLikesCount}
                    dislikesCount={postCompleteState.postDislikesCount}
                    commentsCount={postCompleteState.postCommentsCount}
                    reactionState={postCompleteState.postReactionState}
                    controller={reactionsController}
                />
            </div>
            <PostCompleteComments
                comments={postCompleteState.comments}
                controller={commentsController}
            />
        </div>
    )
}

export default PostComplete