export interface IProductCard {
    name: string;
    description: string;
    pathToImage: string;
    alt: string;
}

export const Products: IProductCard[] = [
    {
        //pirple syrup
        name: "LIGHT ROAST BLEND",
        description: "tangy and tingly",
        pathToImage: '/assets/images/vector/syrup_with_purple_label.svg',
        alt: 'syrup with purple label'
    },
    {
        //two syrups
        name: 'UJJO SAMPLER PACK',
        description: "light & dark roast",
        pathToImage: '/assets/images/vector/two_syrups.svg',
        alt: 'two syrups'
    },
    {
        //pink syrup
        name: "DARK ROAST BLEND",
        description: "tangy and tingly",
        pathToImage: '/assets/images/vector/syrup_with_pink_label.svg',
        alt: 'syrup with pink label'
    }
]