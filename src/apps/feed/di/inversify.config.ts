import {Container} from "inversify";
import {FeedUseCase} from "../domain/usecases/feed.usecase";

const feedContainer = new Container({
    defaultScope: 'Singleton'
})

feedContainer
    .bind<FeedUseCase>(FeedUseCase)
    .toSelf()

export default feedContainer