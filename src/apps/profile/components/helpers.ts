import {ProfileInformationType} from "./profile-information/types";

export function getProfileInformationType(isUserProfile: boolean): ProfileInformationType {
    return isUserProfile ? ProfileInformationType.MY_PROFILE : ProfileInformationType.STRANGER_PROFILE
}