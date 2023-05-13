import {Container} from "inversify";
import {FeedUseCase} from "../domain/usecases/feed.usecase";
import {PopularApi} from "../api/endpoints/popular/popular-api";
import TYPES from "./types";
import {PopularApiImpl} from "../api/impl/popular-api-impl";
import {LastPostedApi} from "../api/endpoints/last-posted/last-posted-api";
import {LastPostedApiImpl} from "../api/impl/last-posted-api-impl";

const feedContainer = new Container({
    defaultScope: 'Singleton'
})

feedContainer
    .bind<PopularApi>(TYPES.PopularApi)
    .to(PopularApiImpl)
feedContainer
    .bind<LastPostedApi>(TYPES.LastPostedApi)
    .to(LastPostedApiImpl)

feedContainer
    .bind<FeedUseCase>(FeedUseCase)
    .toSelf()

export default feedContainer