class CardsGenerator {
    constructor(image) {
        this.isFlipped = false;
        this.id = Math.floor(Math.random() * 1000);
        this.image = image;
    }
}

export const cardFactory = (cardImagesProps = []) => {
    let createdCards = [];

    for (let i = 0; createdCards.length < cardImagesProps.length; i++) {
        createdCards.push(new CardsGenerator(cardImagesProps[i]));
    };

    return createdCards;
};
