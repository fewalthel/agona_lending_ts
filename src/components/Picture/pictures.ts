export interface IPicture {
    largePath?: string; // Путь к изображению для больших экранов
    mediumPath?: string; // Путь к изображению для средних экранов
    smallPath?: string; // Путь к изображению для маленьких экранов
    defaultPath?: string; //Путь к изображению по умолчанию
    alt: string;
    className?: string; //Класс изображения
}

export const Pictures: IPicture[] = [
    {
        smallPath: '/assets/images/vector/foreign_text_desktop.svg',
        defaultPath: '/assets/images/vector/foreign_text_mobile.svg',
        alt: 'foreign text'
    },
    {
        largePath: '/assets/images/large/syrup_around_cups_large.jpg',
        mediumPath: '/assets/images/medium/syrup_around_cups_medium.jpg',
        defaultPath: '/assets/images/small/syrup_around_cups_small.jpg',
        alt: 'syrup around cups'
    },
    {
        largePath: '/assets/images/large/syrup_in_hand_large.jpg',
        mediumPath: '/assets/images/medium/syrup_in_hand_medium.jpg',
        defaultPath: '/assets/images/small/syrup_in_hand_small.jpg',
        alt: 'syrup in hand'
    },
    {
        defaultPath: '/assets/images/vector/scorpion_looks_right.svg',
        alt: 'picture of scorpion which looks right'
    },
    {
        defaultPath: '/assets/images/vector/scorpion_looks_left.svg',
        alt: 'picture of scorpion which looks left'
    },
    {
        largePath: '/assets/images/large/syrup_in_cup_large.jpg',
        mediumPath: '/assets/images/medium/syrup_in_cup_medium.jpg',
        defaultPath: '/assets/images/small/syrup_in_cup_small.jpg',
        alt: 'syrup in cup',
        className: 'products-section-img'
    },
    {
        largePath: '/assets/images/large/woman_large.jpg',
        mediumPath: '/assets/images/medium/woman_medium.jpg',
        defaultPath: '/assets/images/small/woman_small.jpg',
        alt: 'woman'
    },
    {
        defaultPath: '/assets/images/vector/background_for_text.svg',
        alt: 'background for text in the form of an octagon with jars and rabbits'
    },
    {
        smallPath: '/assets/images/vector/foreign_text_on_background_desktop.svg',
        defaultPath: '/public/assets/images/vector/foreign_text_on_background_mobile.svg',
        alt: 'foreign text on green background',
        className: 'bottom-foreign-text'
    }
]
