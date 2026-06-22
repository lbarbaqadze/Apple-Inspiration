import type { HeroTitlePart, ProductVariant } from '@/components/features/ProductHero'

export type ProductHeroConfig = {
    title: HeroTitlePart[][]
    ctaHref: string
    sectionTitle: string
    variants: ProductVariant[]
}

const png = (name: string) => `/productHero-png/${name}.png`

export const productHeroConfigs = {
    iphone: {
        title: [
            [{ text: 'Experience The', bold: true }],
            [{ text: 'Future With', bold: false }],
            [{ text: 'Iphone.', bold: true }],
        ],
        ctaHref: '/iphone',
        sectionTitle: 'Iphone',
        variants: [
            {
                name: 'Silver',
                image: png('iphone1'),
                thumbnail: png('iphone1'),
                color: '#d4d4d8',
                slug: "/iphone-17-promax-white-titanium-128gb"
            },
            {
                name: 'Blue',
                image: png('iphone2'),
                thumbnail: png('iphone2'),
                color: '#4a6280',
                slug: "/iphone-17-promax-blue-titanium-1tb"
            },            
            {
                name: 'Orange',
                image: png('iphone3'),
                thumbnail: png('iphone3'),
                color: '#c9844a',
                slug: "/iphone-17-promax-orange-titanium-512gb"
            },
        ],
    },
    macbook: {
        title: [
            [{ text: 'Find The Perfect Mac', bold: true }],
            [{ text: 'For You Needs.', bold: true }],
        ],
        ctaHref: '/macbook',
        sectionTitle: 'Mac',
        variants: [
            {
                name: 'Midnight',
                image: png('macbook2'),
                thumbnail: png('macbook2'),
                color: '#1e3050',
                slug: "/macbook-air-15-midnight-1tb"
            },
            {
                name: 'Starlight',
                image: png('macbook1'),
                thumbnail: png('macbook1'),
                color: '#c9b896',
                slug: "/macbook-air-15-starlight-512gb"
            },
            {
                name: 'Silver',
                image: png('macbook3'),
                thumbnail: png('macbook3'),
                color: '#b8bcc4',
                slug: "/macbook-air-13-space-gray-1tb"
            },
        ],
    },
    ipad: {
        title: [
            [{ text: 'The Ultimate Device', bold: true }],
            [{ text: 'For Everything You Do.', bold: false }],
        ],
        ctaHref: '/ipad',
        sectionTitle: 'iPad',
        variants: [
            {
                name: 'Purple',
                image: png('ipad2'),
                thumbnail: png('ipad2'),
                color: '#9b8ab8',
                slug: "/ipad-air-11-purple-128gb-(wi-fi)"
            },
            {
                name: 'Blue',
                image: png('ipad1'),
                thumbnail: png('ipad1'),
                color: '#8eb4cc',
                slug: "/ipad-air-13-blue-128gb"
            },
            {
                name: 'Starlight',
                image: png('ipad3'),
                thumbnail: png('ipad3'),
                color: '#e8dcc8',
                slug: "/ipad-10-9-starlight-64gb-(wi-fi)"
            },
        ],
    },
    iwatch: {
        title: [
            [{ text: 'Your Health.', bold: true }],
            [{ text: 'On Your Wrist.', bold: false }],
        ],
        ctaHref: '/iwatch',
        sectionTitle: 'iWatch',
        variants: [
            {
                name: 'Black',
                image: png('iwatch2'),
                thumbnail: png('iwatch2'),
                color: '#3a3a3a',
                slug: "/iwatch-series-11-titanium-gray-41mm"
            },
            {
                name: 'Purple',
                image: png('iwatch1'),
                thumbnail: png('iwatch1'),
                color: '#a894b8',
                slug: "/iwatch-series-11-silver-aluminium-45mm-milanese-loop"
            },
            {
                name: 'Pink',
                image: png('iwatch3'),
                thumbnail: png('iwatch3'),
                color: '#e8c4c8',
                slug: "/iwatch-series-11-rose-gold-41mm"
            },
        ],
    },
} satisfies Record<string, ProductHeroConfig>

export type ProductCategory = keyof typeof productHeroConfigs
