export class CountryModel {
    name: string;
    dialCode: string;
    code: string;
    flag: string;
}

export const countries: CountryModel[] = [
    {
        name: 'Iraq',
        dialCode: '+964',
        code: 'IQ',
        flag: 'assets/img/iq.svg'
    },
    {
        name: 'Iran',
        dialCode: '+98',
        code: 'IR',
        flag: 'assets/img/ir.svg'
    }
];