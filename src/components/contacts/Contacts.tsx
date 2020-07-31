import React, { FC } from 'react';
import contactS from './Contacts.module.scss';
import { ContactsDataI, ContactsPropsI } from '../../interfaces/contactsInterfaces';

const Contacts: FC<ContactsPropsI> = ({ themeMode }: ContactsPropsI) => {
    const isLightTheme = themeMode.colorsType === 'light';

    const contactsData: ContactsDataI[] = [
        {
            link: 'https://www.facebook.com/dmitriy.volynskiy.90',
            style: isLightTheme ? contactS.facebookImgLight : contactS.facebookImgDark,
            id: 6,
        },
        {
            link: 'https://instagram.com/v.o.l.y.n.s.k.i',
            style: isLightTheme ? contactS.instagramImgLight : contactS.instagramImgDark,
            id: 7,
        },
        {
            link: 'https://www.linkedin.com/in/dmytro-volynskyi',
            style: isLightTheme ? contactS.linkedinImgLight : contactS.linkedinImgDark,
            id: 8,
        },
        {
            link: 'https://github.com/dimonval16',
            style: isLightTheme ? contactS.githubImgLight : contactS.githubImgDark,
            id: 9,
        },
    ];

    return (
        <section className={contactS.contactsWrapper}>
            <ul className={contactS.contactsList}>
                {contactsData.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} rel={'noopener noreferrer'} target={'_blank'}>
                            <div className={`${item.style} ${contactS.imgLink}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Contacts;
