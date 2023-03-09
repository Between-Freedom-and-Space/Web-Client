import {Container} from "inversify";

const settingsDependenciesContainer = new Container({
    defaultScope: 'Singleton'
})

export default settingsDependenciesContainer
