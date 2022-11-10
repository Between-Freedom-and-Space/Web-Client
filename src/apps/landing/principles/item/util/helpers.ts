export function findImageElementInsideLandingLinkItem(topContainer: HTMLDivElement): HTMLImageElement {
    const imageDivContainer = topContainer.children.item(0)!
    const imageElement = imageDivContainer.children.item(1)!
    return imageElement as HTMLImageElement
}